
// import BeansFilter from "./Beans/BeansFilter";
// import RoastersFilter from "./Roasters/RoastersFilter";
import SortBy from "./SortBy";

export default function TableOperations({ Filter }) {
  return (
    <aside className="h-fit bg-gray-200 col-span-1 grid grid-rows-[1fr_0.5fr_0.1fr] rounded-ss-[2rem] p-5 mt-20 mr-5">
      <Filter />
      <SortBy />
      {/* reset button */}
    </aside>
  );
}
