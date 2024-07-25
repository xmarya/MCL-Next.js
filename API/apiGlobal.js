import { dbConnection } from "@/helpers/dbConnection";
import User from "@/Models/userModel";


export async function createDoc(Model, formData) {
  try {
    await dbConnection();
    const newDoc = await Model.create();
    newDoc.ratingsQuantityThisMonth = undefined;

    return JSON.parse(JSON.stringify(newDoc));

  } catch (error) {
    console.log("createDoc", error);
  }
}

export async function getAll(Model, filter = {}, sortBy = "-ratingsAverage") {
  console.log(filter);
  
  if(sortBy === "-ratingsQuantity" || sortBy === "ratingsQuantity") {
    sortBy = sortBy.concat(" -ratingsAverage nameAr")
  }
  
  try {
    await dbConnection();

    const docs = await Model.find(filter).sort(sortBy).select("-__v");

    if(!docs) return "No matched data";

    return JSON.parse(JSON.stringify(docs));

  } catch (error) {
    console.log("getAll", error);
  }

}


export async function updateOne(Model, docId) {

}

export async function deleteOne(Model, docId) {
  try {
    await dbConnection();
    // DON'T FORGET THAT HERE YOU MUST CHECK BEFORE DOING ANY THING IF THE USER WHO IS TRYING TO PERFORM THIS API MUST BE AN ADMIN OR THE BEAN'S ROASTER-MASTER.
    // here there are many situation you're going to havta consider abou the redirection
    // if to redirect to the previouse page ? or if it a page that has a list then keep the user there and just revalidate in order to refresh it
    // const beanId = "6678458f199a4c091aa0cf6d";
    await Model.findByIdAndDelete(docId);
    return "removed";
  } catch (error) {
    console.log("deleteOne", error);
  }
}


export async function getFaves(model) {
  // const { userId } = await verifySession();
  // if(!userId) throw new Error("you must login to add it to your faviroutes");
  
  const userId = "668ccaf9391b8dad3456d0ee";
  const field = "favourite".concat(model+"s"); // = favouriteBeans || favouriteRoasters

  try {
      await dbConnection();
      const faves = (await User.findById(userId).select(field))[field];
      return faves;
      // return JSON.parse(JSON.stringify(faves));
      
  } catch (error) {
      console.log("getFaves",error);
  }
}

export async function getMostRatedLastMonth(Model) {
  await dbConnection();
  const topRated = await Model.aggregate([
    {
      $match: {
        ratingsQuantityLastMonth: { $gt: 0 }, // to remove all the roatsers that haven't been rated this month
      },
    },
    {
      $group: {
        _id: "$ratingsQuantityLastMonth",
        docs: { $push: "$$ROOT" },
        // $$ROOT is a system variable that represents the root document currently being processed
        // in the pipeline. It allows you to reference the entire document within the aggregation pipeline.
      },
    },
    {
      $sort: { _id: -1 },
    },
    {
      $limit: 1, // Limit to the first group (max value group)
    },
    {
      $unwind: "$docs", // disassemble the array of documents to its original format, object(s).
    },
    {
      $replaceRoot: { newRoot: "$docs" }, // Replace the root with the original documents
    },
  ]);

  return topRated;
}
