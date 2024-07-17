import { getRoasters } from "@/API/apiRoasters";
import Cards from "../Card/Cards";
import RoastersCards from "./RoastersCards";

export default async function AllRoasters({ filter, sortBy }) {
  const roasters = await getRoasters(filter, sortBy);
  console.log(roasters.length);

  return (
    <div>
      {roasters.map((roaster) => (
        <Cards key={roaster._id} render={<RoastersCards roaster={roaster} />} />
      ))}
    </div>
  );
}
