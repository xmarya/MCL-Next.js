export default function CardHeader({children}) {
    return (
        <div className="bg-[--light-brownish-grey] flex items-center justify-between rounded-ss-[2rem] p-[1.4rem]">
            {children}
        </div>
    )
}

