import AllRoasters from "@/Components/Roasters/AllRoasters";
import RoastersOperations from "@/Components/Roasters/RoastersOperations";
import { Suspense } from "react";

export default async function Roasters({ searchParams }) {
    let sortBy;

  if (searchParams.hasOwnProperty("sortBy")) {
    sortBy = searchParams.sortBy;
    delete searchParams.sortBy;
  }
    return (
      <div className="h-full grid grid-cols-[0.2fr_1fr] gap-2">
        <RoastersOperations/>
        <Suspense fallback="Loading...">
          <AllRoasters filter={searchParams} sort={sortBy}/>
        </Suspense>
      </div>
    );
}

