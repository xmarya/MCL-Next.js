import FilterSelect from "@/Components/FilterSelect";

export default function SelectVariety({options}) {
    const withLocale = "Ar";
    const filterField = "variety".concat(withLocale);

    return (
        <>
            <p className="text-lg font-semibold">السلالة:</p>
            <FilterSelect options={options} filterField={filterField}/>
        </>
    )
}

