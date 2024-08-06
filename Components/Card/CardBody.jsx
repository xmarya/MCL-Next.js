export default function CardBody({children}) {
    return (
        <div className="bg-lime-500 w-full grid grid-cols-1 gap-[1.5rem] py-[2.5rem] px-[1.7rem]">
            {children}
        </div>
    )
}

