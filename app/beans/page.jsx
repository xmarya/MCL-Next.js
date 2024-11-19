import AllBeans from "@/Components/Beans/AllBeans";
import BeansFilters from "@/Components/Beans/BeansFilters";
import { Grid } from "@/Components/Layouts/Grid";
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
    // 2 cols for TOs and 3 cols for ABs..
    <Grid as="section" $numCols="5" $numRows="2" $gap="2rem">
      <TableOperations Filter={BeansFilters}/>
      <Suspense fallback="Loading...">
        <AllBeans filter={filter} sort={sortBy} page={page}/>
      </Suspense>
    </Grid>
  );
}
