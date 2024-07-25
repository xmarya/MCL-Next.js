"use client"

import { buildFilterFormat } from "@/helpers/buildFilterFormat";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useId } from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();


const optionsFake = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export default function SelectRoaster({options}) {
    const locale = "En";
    const filterField = "notes".concat(locale);

    const id = useId();
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    // const currentFilter = searchParams.get(filterField) || "" ; // if there is no filter on roasterAr field then don't set anu value.
  
    function handleSelect(selectedOpts) {

        // // 1- building the format :
        const formattedFilter = buildFilterFormat(selectedOpts);

        const params = new URLSearchParams(searchParams);
        formattedFilter.length ? params.set(filterField, formattedFilter) : params.delete(filterField);

        // // 2- navigate to the new URL progromatically:
        router.replace(`${pathname}?${params.toString()}`, {scroll: false});

    }

    return (
        <>
            <p>انتاج محمصة :</p>
            <Select id={id} onChange={handleSelect} className="w-full bg-orange-300" isMulti isRtl placeholder="اختر..." options={optionsFake} closeMenuOnSelect={false} components={animatedComponents}/>
        </>
    )
}

