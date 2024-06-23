import Bean from "@/Models/beanModel";
import { dbConnection } from "@/helpers/dbConnection";



export async function createBean(formData) {
    await dbConnection();
    // DON'T FORGET THAT HERE YOU MUST CHECK BEFORE DOING ANY THING IF THE USER WHO IS TRYING TO PERFORM THIS API MUST BE AN ADMIN OR THE BEAN'S ROASTER-MASTER.
    // const beanData = formData;
    const newBean = await Bean.create(beanData);
    newBean.ratingsQuantityThisMonth = undefined;
    // return newBean;
    return newBean; // check this later if it needs to be stringifyed
}

export async function getBeans(filter = {}, sortBy = "ranking") {
    await dbConnection();
    const beans = await Bean.find(filter).sort(sortBy);
    console.log("first state",typeof beans);
    if(!beans) return "No matched data"
    return beans;
}
export async function getOneBean(beanId) {
    await dbConnection();
    const bean = await Bean.findById(beanId);

    if(!bean) return "No matched data"
    return bean;
}

export async function getTopBeans() {
    await dbConnection();
    const beans = await Bean.find({ "ranking": { $lte: 10 } }).sort("ranking -ratingsQuantity").select("image nameEn nameAr ranking ratingsQuantity roaster");
    return beans;
}

export async function updateBean(formData) { // here you're going to use that trick Jonas have teached you abou the hidden fom input that holds the id
    await dbConnection();
    // DON'T FORGET THAT HERE YOU MUST CHECK BEFORE DOING ANY THING IF THE USER WHO IS TRYING TO PERFORM THIS API MUST BE AN ADMIN OR THE BEAN'S ROASTER-MASTER.
    // const updatedData = formData;
    const beanId = "6678458f199a4c091aa0cf6d"
    const updatedData = {
        originAr: "جواتيمالا"
    }

    const updatedBean = await Bean.findByIdAndUpdate(beanId, updatedData);
    return updatedBean;

}

export async function deleteBean() {
    await dbConnection();
    // DON'T FORGET THAT HERE YOU MUST CHECK BEFORE DOING ANY THING IF THE USER WHO IS TRYING TO PERFORM THIS API MUST BE AN ADMIN OR THE BEAN'S ROASTER-MASTER.
    // here there are many situation you're going to havta consider abou the redirection
    // if to redirect to the previouse page ? or if it a page that has a list then keep the user there and just revalidate in order to refresh it
    const beanId = "6678458f199a4c091aa0cf6d"
    await Bean.findByIdAndDelete(beanId);
    return "removed";
}