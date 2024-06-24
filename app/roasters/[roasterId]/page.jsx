import { getOneRoaster } from "@/API/apiRoasters";

export default async function Roaster({params}) {
    const {roaster, reviews, beans} = await getOneRoaster(params.roasterId);
    return (
        <div>
            <h1>[roasterId] comp</h1>
        </div>
    )
}

