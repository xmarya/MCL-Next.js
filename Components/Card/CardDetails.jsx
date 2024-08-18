export default function CardDetails({spanText, children}) {
    return (
        <div className="h-10 text-[1.3rem] text-[--main-font-colour] flex items-center">
            <span className="font-bold">{spanText}&nbsp;</span>
            {children}
        </div>
    )
}

