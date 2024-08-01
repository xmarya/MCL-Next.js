
import { getRoastersNames } from "@/API/apiRoasters";
import SelectRoaster from "../SelectsMenu/SelectRoaster";

export default async function RoastersNames({locale}) {
        // const names = await getRoastersNames(params.lang);
        const names = await getRoastersNames("ar");

    return (
        <SelectRoaster options={names}/>
    )
}

