export default function Filter() {
    return (
        <div>
            
        </div>
    )
}


function FilterButton({children, capacity, active, onClick}) {
    return (
        <button></button>
        // <button onClick={() => onClick(capacity)} className={`${capacity === active ? "bg-primary-700 text-primary-50" : ""} py-2 px-5 hover:bg-primary-700`}>
        //     {children}
        // </button>
    );
}