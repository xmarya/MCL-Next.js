import { Subgrid } from "../Layouts/Subgrid";

export default function CardsList({children}) {

  return (
    <Subgrid $subCols="3">
      {children}
    </Subgrid>
  )
}

