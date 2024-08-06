import { getBeansFieldData } from "@/API/apiBeans";
import SelectNotes from "../SelectsMenu/SelectNotes";

export default async function BeansNotes({locale}) {
    const notes = await getBeansFieldData("notes","ar");
    return (
        <SelectNotes options={notes}/>
    )
}

