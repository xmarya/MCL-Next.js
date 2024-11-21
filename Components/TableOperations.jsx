
// import BeansFilter from "./Beans/BeansFilter";
// import RoastersFilter from "./Roasters/RoastersFilter";
import { Aside } from "./Aside";
import SortBy from "./SortBy";

export default function TableOperations({ Filter }) {
  return (
    <Aside $align="stretch" $gap="1.4rem">
      <Filter />
      <SortBy />
      {/* reset button */}
    </Aside>
  );
}
