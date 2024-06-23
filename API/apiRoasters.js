import Roaster from "@/Models/roasterModel";
import { dbConnection } from "@/helpers/dbConnection";


export async function getRoasters(filter = {}, sortBy = "ranking") {
    await dbConnection();
    const roasters = await Roaster.find(filter).sort(sortBy);

    if(!roasters) return "No matched data"
    return JSON.stringify(roasters);
}


export async function getOneRoaster(roasterId) {
    await dbConnection();
    const roaster = await Roaster.findById(roasterId);

    if(!roaster) return "No matched data"
    return JSON.stringify(roaster);
}

export async function getTopBeans() {
    await dbConnection();
    const roasters = await Roaster.find({ "ranking": { $lte: 10 } }).sort("ranking -ratingsQuantity").select("image nameEn nameAr ranking ratingsQuantity");
    return JSON.stringify(roasters);
}