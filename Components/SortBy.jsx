"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
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

export default function SortBy() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    
    const activeOption = searchParams.get("sortBy") || "-ratingsAverage";
    const [selected, setSelected] = useState(activeOption);


    function handleRadio(selectedValue) {
        setSelected(selectedValue);
        const params = new URLSearchParams(searchParams);
        params.set("sortBy", selectedValue);
        router.replace(`${pathname}?${params.toString()}`, {scroll: false});
    }

    return (
         <RadioButtons groupName="sortBy" sortTitle="عرض حسب :" options={sortOptions} selected={selected} onChange={handleRadio}/>
  );
}