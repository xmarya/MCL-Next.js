import { getTopTen } from "@/API/apiRanking"

export default async function TopTenBeans() {
    const topTen = await getTopTen("Bean");
    console.log("topTenBeasn" ,topTen);
    return (
        <div>
            <h1>TopTenBeans comp.</h1>
        </div>
    )
}

