"use client"

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";



export default function SelectRoaster({data}) {

    const namesAr = data.map(({nameAr}) => ({value: `roasterAr=${nameAr}`, label: nameAr}));
    const namesEn = data.map(({nameEn}) => ({value: `roasterAr=${nameEn}`, label: nameEn}));


    const searchParams = useSearchParams();
    const router = useRouter();
  
    function handleSelect(selectedOpt) {}

    return (
        <select>
            {
                namesAr.map(opt =>
                    <option key={opt.value}>{opt.label}</option>
                )
            }
            
        </select>
    )
}

