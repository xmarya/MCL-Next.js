"use client"
import RadioButtons from "@/Components/RadioButtons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const TypesOptions = [
    // the label will be retrieve from the dictionary to make it daynamic
    { htmlFor: "all", label: "الكل", id: "all", value: "Drip,Espresso" },
    { htmlFor: "espresso", label: "اسبريسو", id: "espresso", value: "Espresso" },
    { htmlFor: "drip", label: "مقطرة", id: "drip", value: "Drip" },
];

export default function SelectDrinkType() {
    const filterField = "drinkTypeEn";
    
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    
    const activeOption = searchParams.get(filterField) ?? TypesOptions[0].value;
    const [selected, setSelected] = useState(activeOption);

    function handleRadio(selectedValue) {
        setSelected(selectedValue);
        const params = new URLSearchParams(searchParams);
        params.set(filterField, selectedValue);
        router.replace(`${pathname}?${params.toString()}`, {scroll: false});
    }

    return (
        <RadioButtons groupName="drinkType" sortTitle="نوع المشروب :" options={TypesOptions} selected={selected} onChange={handleRadio}/>
    )
}

