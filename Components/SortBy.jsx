"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

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
const OptionContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    gap: .8rem;
    margin-top: 1rem;
`;

export default function SortBy() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
    const activeOption = searchParams.get("sortBy") || "-ratingsAverage";
    const [isSelected, setIsSelected] = useState(activeOption);
    console.log(isSelected);

    function handleRadio(inputValue) {
        setIsSelected(inputValue);
        const params = new URLSearchParams(searchParams);
        params.set("sortBy", event.target.value);
        router.replace(`${pathname}?${params.toString()}`, {scroll: false});
    }
    return (
        <Fieldset className="bg-yellow-100">
            <label className="text-3xl">عرض حسب :</label>
            {
                sortOptions.map(opt => 
                    <OptionContainer key={opt.id} className="bg-pink-200">
                        <label htmlFor={opt.htmlFor} className="text-2xl">
                            {opt.label}
                        </label>
                        <input name="sortBy" type="radio" id={opt.id} value={opt.value} checked={isSelected === opt.value} onChange={() => handleRadio(opt.value)}/>
                    </OptionContainer>
                )
            }
        </Fieldset>
  );
}