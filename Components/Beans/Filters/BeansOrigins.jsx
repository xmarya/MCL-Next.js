import { getBeansOrigins } from "@/API/apiBeans";
import SelectOrigin from "../SelectsMenu/SelectOrigin";

export default async function BeansOrigins({locale}) {
    const origins = await getBeansOrigins("ar");

    return (
        <SelectOrigin options={origins}/>
    )
}

