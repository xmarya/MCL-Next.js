import { writeReview } from "@/API/apiReviews"

export default async function Reviews() {
    await writeReview("formData");
    return (
        <div>
            <h1>this h1 or Reviews page</h1>
        </div>
    )
}

