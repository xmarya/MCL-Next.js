
export default function CardImage({children}) {
    return (
        <div className="relative">
            {/* imageContainer 👇🏻 */}
            <div className="relative h-[22rem]">
                {children}
            </div>   
        </div>
    )
}

