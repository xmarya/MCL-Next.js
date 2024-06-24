import { getRoasters } from "@/API/apiRoasters";

export default async function RoastersTable({ filter, sortBy}) {

    const roasters = await getRoasters(filter, sortBy);

    if(!roasters.length) return <p>No data were found</p>
    console.log(roasters.length);
    console.log(typeof roasters);
    return (
        <div>
            <h1>RoastersTable comp</h1>
            {/* {roasters} */}
        </div>
    )
}

