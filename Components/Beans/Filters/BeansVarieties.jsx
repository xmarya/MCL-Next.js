import { getBeansVariety } from "@/API/apiBeans"
import SelectVariety from "../SelectsMenu/SelectVariety";

export default async function BeansVarieties({locale}) {
    const varieties = await getBeansVariety("ar");
    
    return (
        <SelectVariety options={varieties}/>
    )
}

