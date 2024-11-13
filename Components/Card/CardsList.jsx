import { Subgrid } from "../Layouts/Subgrid";

export default function CardsList({children}) {

  return (
    <Subgrid $numCol="3" $numRow="5">
      {children}
    </Subgrid>
  )
}

