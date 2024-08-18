import FilterSelect from "@/Components/FilterSelect";

export default function SelectOrigin({options}) {
    const withLocale = "Ar";
    const filterField = "origin".concat(withLocale);

    return (

        <FilterSelect pText="البلد / المنطقة:" options={options} filterField={filterField}/>

    )
}

