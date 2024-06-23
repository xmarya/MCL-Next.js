import Filter from "../Filter";
import SortBy from "../SortBy";

export default function RoastersOperations({ filterOptions, sortOptions }) {
    return (
      <div>
        {/* the tow below are ones to be CC */}
        <Filter />
        <SortBy />
      </div>
    );
  }