import { getOneBean } from "@/API/apiBeans"
import { Suspense } from "react";

export default async function Bean({params}) {
    const {bean, reviews, roaster, ranking} = await getOneBean(params.beanId);
    // console.log(bean);
    // console.log(roaster);
    // console.log(ranking);
    return (
        <div>
            <h1>[beanId] page</h1>
            <Suspense fallback="loading..">
            <span>{bean.nameEn}</span>
            </Suspense>
        </div>
    )
}

