
import { getRoastersNames } from "@/API/apiRoasters";
import SelectRoaster from "../SelectsMenu/SelectRoaster";

export default async function RoastersNames({params}) {
        // const names = await getRoastersNames(params.lang);
        const names = await getRoastersNames("ar");

    return (
        <div>
            <SelectRoaster options={names}/>
        </div>
    )
}

