import AllBeans from "@/Components/Beans/AllBeans";
import BeansOperations from "@/Components/Beans/BeansOperations";
import { Suspense } from "react";

export const metadata = {
  title: "Beans",
  description: "",
};

export default function Beans({ searchParams }) {
  console.log(searchParams);
  let sortBy;

  if (searchParams.hasOwnProperty("sortBy")) {
    sortBy = searchParams.sortBy;
    delete searchParams.sortBy;
  }

  return (
    <div>
      <h1>this h1 is outside the Suspence</h1>
      <BeansOperations />
      <Suspense fallback="Loading...">
        <AllBeans filter={searchParams} sort={sortBy}/>
      </Suspense>
    </div>
  );
}
