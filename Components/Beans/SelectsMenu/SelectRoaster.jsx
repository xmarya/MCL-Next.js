
import FilterSelect from "@/Components/FilterSelect";

export default function SelectRoaster({options}) {

    const filterField = "roaster";

    return (
        <>
            <p>انتاج محمصة :</p>
            <FilterSelect options={options} filterField={filterField}/>
        </>
    )
}

