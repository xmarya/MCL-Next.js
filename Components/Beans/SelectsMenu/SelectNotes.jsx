
import FilterSelect from "@/Components/FilterSelect";

export default function SelectNotes({options}) {
    const withLocale = "Ar";
    const filterField = "notes".concat(withLocale);

    return (

        <FilterSelect pText="ايحاءات المحصول:" options={options} filterField={filterField}/>

    )
}

