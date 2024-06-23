import Bean from "@/Models/beanModel";
import { dbConnection } from "@/helpers/dbConnection";


export async function getBeans(filter = {}, sortBy = "ranking") {
    await dbConnection();
    const beans = await Bean.find(filter).sort(sortBy);

    if(!beans) return "No matched data"
    return JSON.stringify(beans);
}
export async function getOneBean(beanId) {
    await dbConnection();
    const bean = await Bean.findById(beanId);

    if(!bean) return "No matched data"
    return JSON.stringify(bean);
}

export async function getTopBeans() {
    await dbConnection();
    const beans = await Bean.find({ "ranking": { $lte: 10 } }).sort("ranking -ratingsQuantity").select("image nameEn nameAr ranking ratingsQuantity roaster");
    return JSON.stringify(beans);
}