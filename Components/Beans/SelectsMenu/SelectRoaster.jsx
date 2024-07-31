
import FilterSelect from "@/Components/FilterSelect";

export default function SelectRoaster({options}) {

    const filterField = "roaster";

    return (
        <>
            <p className="text-lg font-semibold">انتاج محمصة:</p>
            <FilterSelect options={options} filterField={filterField}/>
        </>
    )
}

