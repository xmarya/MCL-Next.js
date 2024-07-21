"use client"

// import BeansFilter from "./Beans/BeansFilter";
// import RoastersFilter from "./Roasters/RoastersFilter";
import SortBy from "./SortBy";

export default function TableOperations({ Filter }) {

    return (
    <aside className="h-fit bg-fuchsia-400 col-span-1 grid grid-rows-[1fr_0.5fr_0.1fr]">
      {/* the tow below are ones to be CC */}
      <Filter />
      <SortBy />
      <button type="reset">reset all</button>
    </aside>
  );
}

