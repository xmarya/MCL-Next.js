import AllBeans from "@/Components/Beans/AllBeans";
import BeansFilter from "@/Components/Beans/BeansFilter";
import TableOperations from "@/Components/TableOperations";
import { Suspense } from "react";

export const metadata = {
  title: "Beans",
  description: "",
};

export default function Beans({ searchParams }) {
  let sortBy;

  if (searchParams.hasOwnProperty("sortBy")) {
    sortBy = searchParams.sortBy;
    delete searchParams.sortBy;
  }

  // the operations on the right side
  // maybe it's best to make create a layout.jsx and make it a grid container
  return (
    <section className="h-full grid grid-cols-[0.2fr_1fr] gap-2">
      <TableOperations Filter={BeansFilter}/>
      <Suspense fallback="Loading...">
        <AllBeans filter={searchParams} sort={sortBy}/>
      </Suspense>
    </section>
  );
}
