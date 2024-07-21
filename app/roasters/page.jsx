import AllRoasters from "@/Components/Roasters/AllRoasters";
import RoastersFilter from "@/Components/Roasters/RoastersFilter";
import TableOperations from "@/Components/TableOperations";
import { Suspense } from "react";

export default async function Roasters({ searchParams }) {
    let sortBy;

  if (searchParams.hasOwnProperty("sortBy")) {
    sortBy = searchParams.sortBy;
    delete searchParams.sortBy;
  }
  
    return (
      <div className="h-full grid grid-cols-[0.2fr_1fr] gap-2">
        <TableOperations Filter={RoastersFilter}/>
        <Suspense fallback="Loading...">
          <AllRoasters filter={searchParams} sort={sortBy}/>
        </Suspense>
      </div>
    );
}

