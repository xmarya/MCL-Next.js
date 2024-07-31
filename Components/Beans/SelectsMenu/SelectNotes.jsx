
import FilterSelect from "@/Components/FilterSelect";

export default function SelectNotes({options}) {
    const withLocale = "Ar";
    const filterField = "notes".concat(withLocale);

    return (
        <>
            <p className="text-lg font-semibold">ايحاءات المحصول:</p>
            <FilterSelect options={options} filterField={filterField}/>

        </>
    )
}

