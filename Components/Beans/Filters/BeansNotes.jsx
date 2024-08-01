import { getBeansNotes } from "@/API/apiBeans";
import SelectNotes from "../SelectsMenu/SelectNotes";

export default async function BeansNotes({locale}) {
    const notes = await getBeansNotes("ar");
    return (
        <SelectNotes options={notes}/>
    )
}

