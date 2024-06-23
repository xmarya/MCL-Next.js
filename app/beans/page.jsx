import BeansOperations from "@/Components/Beans/BeansOperations";
import BeansTable from "@/Components/Beans/BeansTable";
import { Suspense } from "react";

export const metadata = {
  title: "Beans",
  description: "",
};

export default async function Beans({ searchParams }) {
  let sortBy;

  if (searchParams.hasOwnProperty("sortBy")) {
    sortBy = searchParams.sortBy;
    delete searchParams.sortBy;
  }

  return (
    <div>
      <BeansOperations />
      <Suspense>
        <BeansTable filter={searchParams} sort={sortBy} />
      </Suspense>
    </div>
  );
}
