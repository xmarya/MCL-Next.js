import FilterSelect from "@/Components/FilterSelect";

export default function SelectProcessType({options}) {
    const withLocale = "Ar";
    const filterField = "typeOfProcess".concat(withLocale);

    return (
        <>
            <p className="text-lg font-semibold">المعالجة:</p>
            <FilterSelect options={options} filterField={filterField}/>
        </>
    )
}

