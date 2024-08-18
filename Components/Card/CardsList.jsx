
export default function CardsList({children}) {


  return (
    <div>
      <ul className="gap-8 rounded-xl grid grid-cols-[repeat(3,1fr)] items-center justify-center ml-5">
      {children}
      </ul>
    </div>
  )
}

