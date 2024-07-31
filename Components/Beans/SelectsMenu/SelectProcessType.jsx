import FilterSelect from "@/Components/FilterSelect";

export default function SelectProcessType({options}) {
    const withLocale = "Ar";
    const filterField = "typeOfProcess".concat(withLocale);

    return (
        <>
            <p>المعالجة:</p>
            <FilterSelect options={options} filterField={filterField}/>
        </>
    )
}

