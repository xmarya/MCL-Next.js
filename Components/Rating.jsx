import RatingStars from "./RatingStars";

export default function Rating({ratingAvg, ratingQuant}) {
    return (
        <div dir="ltr" className="bg-lime-700 row-span-full text-[2rem] flex items-center justify-center gap-[0.5rem]">
            {ratingAvg}
            <RatingStars rating={ratingAvg}/>
          <span className="text-base">({ratingQuant})</span>
        </div>
    )
}

