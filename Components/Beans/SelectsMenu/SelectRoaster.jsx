
import FilterSelect from "@/Components/FilterSelect";

export default function SelectRoaster({options}) {

    const filterField = "roaster";

    return (
            <FilterSelect pText="انتاج محمصة:" options={options} filterField={filterField}/>
    )
}

