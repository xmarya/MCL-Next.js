
export default function CardRanking({ranking}) {
    return (
        <h3 className={`text-[3.6rem] ${ranking > 0 ? "text-[--colour-secondary-dark-1]" : "text-gray-500" }`}>
            {ranking}
        </h3>
    )
}

