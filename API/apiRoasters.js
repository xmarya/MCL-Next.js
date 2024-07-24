import Roaster from "@/Models/roasterModel";
import { dbConnection } from "@/helpers/dbConnection";

// export async function createRoaster(formData) {
//   await dbConnection();

//   const newRoaster = await Roaster.create();
//   newRoaster.ratingsQuantityThisMonth = undefined;
//   return newRoaster;
// }

// export async function getRoasters(filter = {}, sortBy = "ranking") {
//   await dbConnection();
//   const roasters = await Roaster.find(filter).sort(sortBy).select("-__v");

//   if (!roasters) return "No matched data";
//   return roasters;
// }

export async function getOneRoaster(roasterId) {
  try {
    await dbConnection();
    const roaster = await Roaster.findById(roasterId)
    .select("-__v")
    .populate({
      path: "reviews",
      select: "reviewBody rating wroteAt user -reviewedModel",
    })
    .populate({ path: "beans", select: "nameEn nameAr image rating -roaster" })
    .populate({ path: "ranking", select: "rank" });

    if (!roaster) return "No matched data";
    return {
      roaster,
      reviews: roaster.reviews,
      beans: roaster.beans,
      ranking: roaster.ranking,
    };
  } catch (error) {
    console.log("getOneRoaster", error);
  }
}

export async function getRoastersNames() {
  try {

    await dbConnection();
    const names = await Roaster.find().select("nameAr nameEn -_id");
    return JSON.parse(JSON.stringify(names));

  } catch (error) {
    
    console.log("getRoastersNames", error);
  }
}

// export async function getTopRoasters() {
//     await dbConnection();
//     const roasters = await Roaster.find({ "ranking": { $lte: 10 } }).sort("ranking -ratingsQuantity").select("image nameEn nameAr ranking ratingsQuantity -__v");
//     return roasters;
// }

export async function updateRoaster(formData) {
  await dbConnection();
  const updateData = formData;
  // const updatedRoaster = await Roaster.findByIdAndUpdate(roasterId, updateData);
  // return updatedRoaster;
}

// export async function deleteRoaster(roasterId) {
//   await dbConnection();
//   await Roaster.findByIdAndDelete(roasterId);
//   return "roaster deleted";
// }


export async function getNearest(userLocation) {

  /*
  the logic is to use setSearchParams() hook in a CC then sen this params to this function
  */

  // 1- Get the current location of the user :
  // const [lat, lng] = request.params.latlng.split(","); // we're splitting the params.latlng to make it an array of 2. 
  const [lat, lng] = userLocation.split(","); // we're splitting the params.latlng to make it an array of 2. 
  if(!lat || !lng) return  {error: {message: "Please provide your Please provide your current location ."}};

  // 2- Display the nearest roasters (within 500km - 1000km) :
  const multiplier = 0.001;
  // * 1 to convert them from strings to numbers.
  const roasters = await Roaster.aggregate([ {$geoNear: { near: { type: "Point", coordinates: [lng * 1 , lat * 1]},
                                                                  distanceField: "distance", distanceMultiplier: multiplier}},
                                              {
                                                  $unwind: "$locations" // to make each location object as a single document.
                                              },
                                              {$project: {nameEn:1, cityEn:1, "locations.branchAr":1, "locations.coordinates":1, distance:1} },
                                              {$sort: {distance: 1}},
                                              {$match: {distance: {$lt : 50}}}
                                          ]);
  /*
  includeLocs: This option is useful when a location field contains multiple locations. To specify a field within an embedded document, use dot notation.
  maxDistance: The maximum distance from the center point that the documents can be. MongoDB limits the results to those documents that fall within the specified distance from the center point.
  minDistance: Optional. The minimum distance from the center point that the documents can be. MongoDB limits the results to those documents that fall outside the specified distance from the center point.

  */

  return roasters;
}
