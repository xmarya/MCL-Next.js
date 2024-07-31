import FilterSelect from "@/Components/FilterSelect";

export default function SelectOrigin({options}) {
    const withLocale = "Ar";
    const filterField = "origin".concat(withLocale);

    return (
        <>
            <p className="text-lg font-semibold">البلد / المنطقة:</p>
            <FilterSelect options={options} filterField={filterField}/>

        </>
    )
}

