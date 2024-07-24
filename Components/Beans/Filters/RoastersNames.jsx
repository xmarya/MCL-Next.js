
import { getRoastersNames } from "@/API/apiRoasters";
import SelectRoaster from "../SelectsMenu/SelectRoaster";

export default async function RoastersNames() {
        const names = await getRoastersNames();


    return (
        <div>
            <SelectRoaster data={names}/>
        </div>
    )
}

