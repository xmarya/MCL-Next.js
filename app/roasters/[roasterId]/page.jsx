import { getOneRoaster } from "@/API/apiRoasters";
import { Suspense } from "react";

export default async function Roaster({params}) {
    const {roaster, reviews, beans, ranking} = await getOneRoaster(params.roasterId);
    // console.log(ranking);
    // console.log(beans);
    // console.log(reviews);
    return (
        <div>
            <h1>[roasterId] comp</h1>
            <Suspense fallback="loading...">
            <span>{roaster.nameEn}</span>
            </Suspense>
        </div>
    )
}

