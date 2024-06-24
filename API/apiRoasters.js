import Roaster from "@/Models/roasterModel";
import { dbConnection } from "@/helpers/dbConnection";

export async function createRoaster(formData) {
    await dbConnection();

    const newRoaster = await Roaster.create();
    newRoaster.ratingsQuantityThisMonth = undefined;
    return newRoaster;
}

export async function getRoasters(filter = {}, sortBy = "ranking") {
    await dbConnection();
    const roasters = await Roaster.find(filter).sort(sortBy);

    if(!roasters) return "No matched data"
    return roasters;
}

export async function getOneRoaster(roasterId) {
    await dbConnection();
    const roaster = await Roaster.findById(roasterId)
        .populate({ path: "reviews", select: "reviewBody rating wroteAt user -reviewedModel"})
        .populate({ path: "beans", select: "nameEn nameAr image rating -roaster"});

    if(!roaster) return "No matched data"
    return {roaster, reviews: roaster.reviews, beans: roaster.beans};
}

export async function getTopBeans() {
    await dbConnection();
    const roasters = await Roaster.find({ "ranking": { $lte: 10 } }).sort("ranking -ratingsQuantity").select("image nameEn nameAr ranking ratingsQuantity");
    return roasters;
}

export async function updateRoaster(formData) {
    await dbConnection();
    const updateData = formData;
    // const updatedRoaster = await Roaster.findByIdAndUpdate(roasterId, updateData);
    // return updatedRoaster;
}

export async function deleteRoaster(roasterId) {
    await dbConnection();
    await Roaster.findByIdAndDelete(roasterId);
    return "roaster deleted";
}