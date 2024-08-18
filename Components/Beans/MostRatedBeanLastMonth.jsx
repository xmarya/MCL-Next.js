import { getMostRatedLastMonth } from "@/API/apiGlobal"
import Bean from "@/Models/beanModel";

export default async function MostRatedBeanLastMonth() {
    const MRB = await getMostRatedLastMonth(Bean);
    return (
        <div>
            <h1>MostRatedBeanLastMonth page</h1>
        </div>
    )
}

