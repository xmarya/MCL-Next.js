import FilterSelect from "@/Components/FilterSelect";

export default function SelectProcessType({options}) {
    const withLocale = "Ar";
    const filterField = "typeOfProcess".concat(withLocale);

    return (
            <FilterSelect pText="المعالجة:" options={options} filterField={filterField}/>
    )
}

