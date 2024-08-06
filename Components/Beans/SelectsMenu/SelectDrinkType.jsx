"use client"
import RadioButtons from "@/Components/RadioButtons";
import { useSearchParams } from "next/navigation";

const TypesOptions = [
    // the label will be retrieve from the dictionary to make it daynamic
    { htmlFor: "all", label: "الكل", id: "all", value: "Drip,Espresso" },
    { htmlFor: "espresso", label: "اسبريسو", id: "espresso", value: "Espresso" },
    { htmlFor: "drip", label: "مقطرة", id: "drip", value: "Drip" },
];

export default function SelectDrinkType() {
    const filterField = "drinkTypeEn";
    
    const searchParams = useSearchParams();
    
    const activeOption = searchParams.get(filterField) ?? TypesOptions[0].value;

    return (
        <RadioButtons groupName="drinkType" pText="نوع المشروب :" options={TypesOptions} paramsName={filterField} selected={activeOption}/>
    )
}

