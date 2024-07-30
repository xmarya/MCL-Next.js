"use client"

import { buildFilterFormat } from "@/helpers/buildFilterFormat";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useId } from "react";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default function SelectRoaster({options}) {

    const filterField = "roaster";

    const id = useId();
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const currentFilter = searchParams.get(filterField)?.split(",") ?? []; // if there is no filter on roasterAr field then don't set anu value.

    // Map currentFilter to the format expected by defaultValue -which is array-
    const defaultValues = currentFilter.map(value => {
        return options.find(option => option.value === value);
    }).filter(Boolean); // Remove any undefined values

    function handleSelect(selectedOpts) {
        // 1- building the format :
        const formattedFilter = buildFilterFormat(selectedOpts);

        const params = new URLSearchParams(searchParams);
        formattedFilter.length ? params.set(filterField, formattedFilter) : params.delete(filterField);

        // 2- navigate to the new URL progromatically:
        router.replace(`${pathname}?${params.toString()}`, {scroll: false});

    }

    return (
        <>
            <p>انتاج محمصة :</p>
            <Select id={id} onChange={handleSelect} defaultValue={defaultValues} className="w-full bg-orange-300" isMulti isRtl placeholder="اختر..." options={options} closeMenuOnSelect={false} components={animatedComponents}/>
        </>
    )
}

