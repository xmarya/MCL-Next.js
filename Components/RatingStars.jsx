"use client"
import { StarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import StarRating from "react-svg-star-rating";

// export default function RatingStars({rating, onClick}) {
//     const [tempRating, setTempRating] = useState("")
//     return (
//         <div className="flex items-center justify-center">
//             {Array.from({length: 5}, (_, index) => 
//                 onClick ?
//                 <>
//                 <StarIcon role="button" onMouseEnter={() => setTempRating(index+1)}  key={index} onClick={onClick} className="w-7 h-7 stroke-yellow-400 cursor-pointer hover:fill-yellow-400"/>
//                 <span>{tempRating}</span>
//                 </>
//                 :
//                 <StarIcon key={index} className={`w-7 h-7 stroke-yellow-400 ${rating >= index+1 && "fill-yellow-400"}`}/>
//             )}
//         </div>
//     )
// }

export default function RatingStars({rating, onClick}) {

    return(
        <>
        { onClick ? 
        
        <StarRating role="button" containerClassName="flex" hoverColor="#ffd055" initialRating={rating} count={5} size={25} unit="float"/>
        :
        <StarRating containerClassName="flex" initialRating={rating} isReadOnly={true} count={5} size={15} unit="float"/>
    }
        </>
    );
}
