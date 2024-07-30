
import FilterSelect from "@/Components/FilterSelect";

export default function SelectNotes({options}) {
    const withLocale = "Ar";
    const filterField = "notes".concat(withLocale);

    return (
        <>
            <p>ايحاءات المحصول:</p>
            <FilterSelect options={options} filterField={filterField}/>

        </>
    )
}

