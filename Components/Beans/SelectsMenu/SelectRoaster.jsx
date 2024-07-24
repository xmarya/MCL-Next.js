"use client"

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";



export default function SelectRoaster({options}) {

    const searchParams = useSearchParams();
    const router = useRouter();
  
    function handleSelect(selectedOpt) {}

    return (
        <select>
            {
                options.map(opt =>
                    <option key={opt.value}>{opt.label}</option>
                )
            }
            
        </select>
    )
}

