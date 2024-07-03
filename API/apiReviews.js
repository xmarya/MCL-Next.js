import Review from "@/Models/reviewModel";
import { dbConnection } from "@/helpers/dbConnection";

/*
    this func here is probably going to be a server action, its implementation requires
    accessing the request's url (pathname) in order to know which model the review is for,
    BUT THE PROBLEM IS that server actions don't have access to the request,
    so I think the way to solve this is to use usePathname() hook and pass it
    with the formData to the action func.
    for more info see: https://nextjs.org/docs/app/api-reference/functions/use-pathname
*/
export async function writeReview(formDate) {
  // check if there is a user before connecting o save time and effort:

  await dbConnection();
  // const newReview = await Review.create(formDate); // you may reurn the newly created review to display it instantly instead of re-rendering to reflect the changes in the UI.
  /*         
    const modelName = request.originalUrl.includes("roaster") ? "Roaster" : "Bean";    
    const review = await Review.create({
        reviewBody: request.body.reviewBody,
        rating: request.body.rating,
        user: request.user.id,
        reviewedModel: "65966a2e12a0c1555779277b" request.body.reviewedModel || request.params.modelId, // it can be spesified in the request body or on the request params.
        beanOrRoaster: modelName
    });
    */

  const newReview = await Review.create({
    reviewBody: "test",
    rating: 1,
    user: "65a3b99b4166dbf28168c456",
    reviewedModel: "65966a2e12a0c1555779277b",
    beanOrRoaster: "Roaster",
  });

  return newReview;
}

export async function updateMyReview(formDate) {
  // const updatedData = formDate;
  // const updatedReveiw = await Review.findByIdAndUpdate(reviewId, updatedData);
  // return updatedReveiw;
}

export async function deleteMyReview(reviewId) {
  await Review.findByIdAndDelete(reviewId);

  return "successfully deleted";
}
