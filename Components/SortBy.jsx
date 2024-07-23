"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import RadioButtons from "./RadioButtons";

/*
    الترتيب حسب:
    الاسم
    الأكثر/الأقل تقييمًا
    الأكثر/الأقل تصويتًا
*/


const sortOptions = [
    { htmlFor: "highestRating", label: "الأعلى تقييمًا", id: "highestRating", value: "-ratingsAverage" },
    { htmlFor: "lowestRating", label: "الأقل تقييمًا", id: "lowestRating", value: "ratingsAverage" },
    { htmlFor: "highestVoting", label: "الأكثر تصويتًا", id: "highestVoting", value: "-ratingsQuantity" },
    { htmlFor: "lowestVoting", label: "الأقل تصويتًا", id: "lowestVoting", value: "ratingsQuantity" },
    { htmlFor: "name", label: "الاسم", id: "name", value: "nameAr" },
];

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    margin-bottom: 1.6rem;
`;


export default function SortBy() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
    const activeOption = searchParams.get("sortBy") || "-ratingsAverage";
    const [isSelected, setIsSelected] = useState(activeOption);


    function handleRadio(inputValue) {
        setIsSelected(inputValue);
        const params = new URLSearchParams(searchParams);
        params.set("sortBy", event.target.value);
        router.replace(`${pathname}?${params.toString()}`, {scroll: false});
    }

    return (
        <Fieldset className="bg-yellow-100">
            <label className="text-3xl">عرض حسب :</label>
            <RadioButtons options={sortOptions} isSelected={isSelected} onChange={handleRadio}/>
        </Fieldset>
  );
}