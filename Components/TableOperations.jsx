
// import BeansFilter from "./Beans/BeansFilter";
// import RoastersFilter from "./Roasters/RoastersFilter";
import SortBy from "./SortBy";

export default function TableOperations({ Filter }) {
  return (
    <aside className="bg-gray-600 h-fit p-[1rem]">
      <Filter />
      <SortBy />
      {/* reset button */}
    </aside>
  );
}
