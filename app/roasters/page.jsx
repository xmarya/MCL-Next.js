import AllRoasters from "@/Components/Roasters/AllRoasters";
import RoastersOperations from "@/Components/Roasters/RoastersOperations";
import RoastersTable from "@/Components/Roasters/RoastersTable";
import { Suspense } from "react";

export default async function Roasters({ searchParams }) {
    let sortBy;

  if (searchParams.hasOwnProperty("sortBy")) {
    sortBy = searchParams.sortBy;
    delete searchParams.sortBy;
  }
    return (
        <div>
            <RoastersOperations/>
            <Suspense>
                <AllRoasters/>
            </Suspense>
        </div>
    )
}

