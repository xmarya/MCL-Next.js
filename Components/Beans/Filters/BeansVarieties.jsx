import { getBeansFieldData } from "@/API/apiBeans"
import SelectVariety from "../SelectsMenu/SelectVariety";

export default async function BeansVarieties({locale}) {
    const varieties = await getBeansFieldData("variety","ar");
    
    return (
        <SelectVariety options={varieties}/>
    )
}

