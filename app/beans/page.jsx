import AllBeans from "@/Components/Beans/AllBeans";
import BeansFilters from "@/Components/Beans/BeansFilters";
import TableOperations from "@/Components/TableOperations";
import { destructSearchParams } from "@/helpers/filtering";
import { Suspense } from "react";

export const metadata = {
  title: "Beans",
  description: "",
};

export default function Beans({ searchParams }) {

  const {filter, sortBy} = destructSearchParams(searchParams);

  return (
    <section className="h-full grid grid-cols-[0.2fr_1fr] gap-2">
      <TableOperations Filter={BeansFilters}/>
      <Suspense fallback="Loading...">
        <AllBeans filter={filter} sort={sortBy}/>
      </Suspense>
    </section>
  );
}
