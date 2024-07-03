import { getTopTen } from "@/API/apiRanking"

export default async function TopTenRoasters() {
    const topTen = await getTopTen("Roaster");
    console.log("topTenRoasters" ,topTen);

    return (
        <div>
            <h1>TopTenRoasters comp.</h1>
        </div>
    )
}

