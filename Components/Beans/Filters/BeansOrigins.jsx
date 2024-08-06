import { getBeansFieldData } from "@/API/apiBeans";
import SelectOrigin from "../SelectsMenu/SelectOrigin";

export default async function BeansOrigins({locale}) {
    const origins = await getBeansFieldData("origin","ar");

    return (
        <SelectOrigin options={origins}/>
    )
}

