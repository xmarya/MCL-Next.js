import FilterSelect from "@/Components/FilterSelect";

export default function SelectOrigin({options}) {
    const withLocale = "Ar";
    const filterField = "origin".concat(withLocale);

    return (
        <>
            <p>البلد / المنطقة:</p>
            <FilterSelect options={options} filterField={filterField}/>

        </>
    )
}

