import Bean from "@/Models/beanModel";
import { dbConnection } from "@/helpers/dbConnection";
import { intoFilteringArray } from "@/helpers/filtering";

// export async function createBean(formData) {
//   await dbConnection();
//   // DON'T FORGET THAT HERE YOU MUST CHECK BEFORE DOING ANY THING IF THE USER WHO IS TRYING TO PERFORM THIS API MUST BE AN ADMIN OR THE BEAN'S ROASTER-MASTER.
//   // const beanData = formData;
//   const newBean = await Bean.create(beanData);
//   newBean.ratingsQuantityThisMonth = undefined;
//   // return newBean;
//   return newBean; // check this later if it needs to be stringifyed
// }

// export async function getBeans(filter = {}, sortBy = "ranking") {
//   await dbConnection();
//   const beans = await Bean.find(filter).sort(sortBy).select("-__v");

//   if (!beans) return "No matched data";
//   return JSON.parse(JSON.stringify(beans));
// }


export async function getOneBean(beanId) {
  try {
    await dbConnection();
    const bean = await Bean.findById(beanId)
    .select("-__v")
    .populate({
      path: "reviews",
      select: "reviewBody rating wroteAt user -reviewedModel",
    })
    .populate({ path: "roaster", select: "nameEn nameAr rating" })
    .populate({ path: "ranking", select: "rank" });

  if (!bean) return "No matched data";
  return {
    bean,
    reviews: bean.reviews,
    roaster: bean.roaster,
    ranking: bean.ranking,
  };
  } catch (error) {
    console.log("getOneBean", error);
  }
}


export async function updateBean(formData) {
  // here you're going to use that trick Jonas have teached you abou the hidden fom input that holds the id
  await dbConnection();
  // DON'T FORGET THAT HERE YOU MUST CHECK BEFORE DOING ANY THING IF THE USER WHO IS TRYING TO PERFORM THIS API MUST BE AN ADMIN OR THE BEAN'S ROASTER-MASTER.
  // const updatedData = formData;
  const updatedData = formData;
  // const updatedBean = await Bean.findByIdAndUpdate(beanId, updatedData);
  // return updatedBean;
}

// export async function deleteBean() {
//   await dbConnection();
//   // DON'T FORGET THAT HERE YOU MUST CHECK BEFORE DOING ANY THING IF THE USER WHO IS TRYING TO PERFORM THIS API MUST BE AN ADMIN OR THE BEAN'S ROASTER-MASTER.
//   // here there are many situation you're going to havta consider abou the redirection
//   // if to redirect to the previouse page ? or if it a page that has a list then keep the user there and just revalidate in order to refresh it
//   const beanId = "6678458f199a4c091aa0cf6d";
//   await Bean.findByIdAndDelete(beanId);
//   return "removed";
// }

/*

export async function getBeansNotes(locale) {

  const withLocale = locale.at(0).toUpperCase().concat(locale.at(1));
  const field = "notes".concat(withLocale); // = notesAr || notesEn

  try {
    await dbConnection();
    const notes = await Bean.find().select(field);
    const beansNotes = intoFilteringArray(notes, field);

    return beansNotes;

  } catch (error) {
    console.log("getBeansNotes", error);
  }

}

export async function getBeansOrigins(locale) {
  const withLocale = locale.at(0).toUpperCase().concat(locale.at(1));
  const field = "origin".concat(withLocale); // = originAr || originEn

  try {
    await dbConnection();
    const origins = await Bean.find().select(field);
    const beansOrigins = intoFilteringArray(origins, field);

    return beansOrigins;
    
  } catch (error) {
    console.log("getBeansOrigins", error);
  }

}

export async function getBeansProcessTypes(locale) {
  const withLocale = locale.at(0).toUpperCase().concat(locale.at(1));
  const field = "typeOfProcess".concat(withLocale); // = typeOfProcessAr || typeOfProcessEn

  try {
    await dbConnection();
    const processTypes = await Bean.find().select(field);
    const beansProcessTypes = intoFilteringArray(processTypes, field);

    return beansProcessTypes;
    
  } catch (error) {
    console.log("getBeansProcessTypes", error);
  }

}

export async function getBeansVariety(locale) {
  const withLocale = locale.at(0).toUpperCase().concat(locale.at(1));
  const field = "variety".concat(withLocale); // = varietyAr || varietyEn

  try {
    await dbConnection();
    const variety = await Bean.find().select(field);
    const beansVariety = intoFilteringArray(variety, field);

    return beansVariety;
    
  } catch (error) {
    console.log("getBeansVariety", error);
  }

}
*/

export async function getBeansFieldData(field, locale) {
  const withLocale = locale.at(0).toUpperCase().concat(locale.at(1));
  field = field.concat(withLocale); // = varietyAr || varietyEn for example.

  try {
    await dbConnection();
    const dataObject = await Bean.find().select(field);
    const beansFilteringData = intoFilteringArray(dataObject, field);

    return beansFilteringData;
    
  } catch (error) {
    console.log("getBeansFieldData", error);
  }
}