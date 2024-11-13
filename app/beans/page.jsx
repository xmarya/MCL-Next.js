import AllBeans from "@/Components/Beans/AllBeans";
import BeansFilters from "@/Components/Beans/BeansFilters";
import { FlexBox } from "@/Components/Layouts/FlexBox";
import TableOperations from "@/Components/TableOperations";
import { destructSearchParams } from "@/helpers/filtering";
import { Suspense } from "react";

export const metadata = {
  title: "Beans",
  description: "",
};

export default function Beans({ searchParams }) {

  const {filter, sortBy, page} = destructSearchParams(searchParams);

  return (
    <>
      <TableOperations Filter={BeansFilters}/>
      <Suspense fallback="Loading...">
        <AllBeans filter={filter} sort={sortBy} page={page}/>
      </Suspense>
    </>
  );
}
