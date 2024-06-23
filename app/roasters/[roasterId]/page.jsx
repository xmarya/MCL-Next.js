import { getOneRoaster } from "@/API/apiRoasters";

export default async function Roaster({params}) {
    const roaster = await getOneRoaster(params.roasterId);
    return (
        <div>
            {roaster}
        </div>
    )
}

