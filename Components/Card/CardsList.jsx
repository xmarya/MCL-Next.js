

export default function CardsList({children}) {
  return (
    <ul className="bg-blue-400 grid grid-cols-[repeat(3,1fr)] items-center justify-center gap-[2.8rem] p-[1.5rem] overflow-hidden">
      {children}
    </ul>
  )
}

