import { getBeansProcessTypes } from "@/API/apiBeans";
import SelectProcessType from "../SelectsMenu/SelectProcessType";

export default async function BeansProcessTypes() {
    const processTypes = await getBeansProcessTypes("ar");
    
    return (
        <SelectProcessType options={processTypes}/>

    )
}

