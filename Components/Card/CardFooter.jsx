export default function CardFooter({children}) {
    return (
        <div className="bg-amber-800 text-[1.4rem] grid grid-cols-2 gap-2 py-[2.5rem] px-4 mt-auto">
            {children}
        </div>
    )
}
