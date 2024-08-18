import FilterSelect from "@/Components/FilterSelect";

export default function SelectVariety({options}) {
    const withLocale = "Ar";
    const filterField = "variety".concat(withLocale);

    return (
            <FilterSelect pText="السلالة:" options={options} filterField={filterField}/>

    )
}

