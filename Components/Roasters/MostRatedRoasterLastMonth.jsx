import { getMostRatedLastMonth } from "@/API/apiGlobal";
import Roaster from "@/Models/roasterModel";

export default async function MostRatedRoasterLastMonth() {
    const MRR = await getMostRatedLastMonth(Roaster);
    console.log(MRR);
    return (
        <div>
            <h1>MostRatedRoasterLastMonth page</h1>
        </div>
    )
}

