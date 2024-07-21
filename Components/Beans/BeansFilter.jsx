"use client"

export default function BeansFilter({filterOptions}) {
  //http://localhost:3000/beans?typeOfProcessAr=مجففة&notesAr=شوكولاتة&isRare=true

  return (
    <div>
        BF
    </div>
  );
}

function FilterButton({ children, capacity, active, onClick }) {
  return (
    <button></button>
    // <button onClick={() => onClick(capacity)} className={`${capacity === active ? "bg-primary-700 text-primary-50" : ""} py-2 px-5 hover:bg-primary-700`}>
    //     {children}
    // </button>
  );
}
