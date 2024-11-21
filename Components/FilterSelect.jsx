"use client"

import { buildFilterFormat } from "@/helpers/filtering";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useId } from "react";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import { FlexBox } from "./Layouts/FlexBox";

const animatedComponents = makeAnimated();

const customStyles = {
    control: (base, state) => ({
      ...base,
      boxShadow: state.isFocused && "none", // removes the blue border.
      borderColor: "none"
    }),
    placeholder: (base, state) => ({
        ...base,
        fontSize: "1.2rem",
    }),
    option: (base, state) => ({
        ...base,
        fontSize: "1.2rem",
        fontWeight: "500"
    }),
  };
  

export default function FilterSelect({ pText, options, filterField }) {

    const id = useId();
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const currentFilter = searchParams.get(filterField)?.split(",") ?? []; // if there is no filter on roasterAr field then don't set anu value.

    // Map currentFilter to the format expected by defaultValue -which is array-
    const defaultValues = currentFilter.map(value => {
        return options.find(option => option.value === value);
        /*
            In react-select, the defaultValue prop requires an array of option objects, 
            not just their values. Each option object should have at least a label and a value property.
            The defaultValue prop will display the labels of the options whose values match the given defaultValue.
            that's whay in roastersNames case where the values are the roasters' ids, but the label associated to each value.
            for more clarification see the getRoastersNames API.
        */
    }).filter(Boolean); // Remove any undefined values

    function handleSelect(selectedOpts) {
        // 1- building the format :
        const formattedFilter = buildFilterFormat(selectedOpts);

        const params = new URLSearchParams(searchParams);
        formattedFilter.length ? params.set(filterField, formattedFilter) : params.delete(filterField);
        params.set("page", 1); // reset the page whenever there was a change to the other params
        // 2- navigate to the new URL progromatically:
        router.push(`${pathname}?${params.toString()}`, {scroll: false});   
        /*
            router.replace updates the URL without adding a new entry to the browser's history stack.
            This is useful for updating the URL while keeping the user on the same page.
        */
    }

    return (
        <FlexBox $align="stretch" $gap="0.5rem">
        <p className="text-[1.6rem] font-semibold text-gray-500 mb-3">{pText}</p>
        <Select id={id} onChange={handleSelect} defaultValue={defaultValues} isMulti isRtl placeholder="اختر..." options={options} closeMenuOnSelect={false} components={animatedComponents} styles={customStyles} />
        </FlexBox>
    )
}

