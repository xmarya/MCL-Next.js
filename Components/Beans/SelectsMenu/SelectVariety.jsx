import FilterSelect from "@/Components/FilterSelect";

export default function SelectVariety({options}) {
    const withLocale = "Ar";
    const filterField = "variety".concat(withLocale);

    return (
        <>
            <p>السلالة:</p>
            <FilterSelect options={options} filterField={filterField}/>
        </>
    )
}

