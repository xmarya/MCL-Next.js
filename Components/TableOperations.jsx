
// import BeansFilter from "./Beans/BeansFilter";
// import RoastersFilter from "./Roasters/RoastersFilter";
import SortBy from "./SortBy";

export default function TableOperations({ Filter }) {
  return (
    <aside className="h-fit bg-fuchsia-400 col-span-1 grid grid-rows-[1fr_0.5fr_0.1fr] p-6">
      
      <Filter />
      <SortBy />
      
    </aside>
  );
}
