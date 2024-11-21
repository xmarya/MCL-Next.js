"use client";

import { useSearchParams } from "next/navigation";
import RadioButtons from "./Buttons/RadioButtons";

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
    
    const activeOption = searchParams.get("sortBy") || "-ratingsAverage";

    return (
         <RadioButtons groupName="sortBy" pText="عرض حسب :" options={sortOptions} paramsName="sortBy" selected={activeOption}/>
  );
}