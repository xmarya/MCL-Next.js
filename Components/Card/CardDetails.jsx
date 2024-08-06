export default function CardDetails({spanText, children}) {
    return (
        <div className="h-10 text-[1.3rem] flex items-center bg-lime-300">
            <span>{spanText}&nbsp;</span>
            {children}
        </div>
    )
}

