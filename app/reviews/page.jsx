import { writeReview } from "@/API/apiReviews"

export default async function Reviews() {
    const newReview = await writeReview("formData");
    console.log(newReview);
    return (
        <div>
            <h1>this h1 or Reviews page</h1>
        </div>
    )
}

