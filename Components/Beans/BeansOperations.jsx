import Filter from "../Filter";
import SortBy from "../SortBy";

export default function BeansOperations({ filterOptions, sortOptions }) {
  return (
    <div>
      {/* the tow below are ones to be CC */}
      <Filter />
      <SortBy />
    </div>
  );
}
