import { getBeansFieldData } from "@/API/apiBeans";
import SelectProcessType from "../SelectsMenu/SelectProcessType";

export default async function BeansProcessTypes({locale}) {
    const processTypes = await getBeansFieldData("typeOfProcess","ar");
    
    return (
        <SelectProcessType options={processTypes}/>

    )
}

