import { getRoasters } from "@/API/apiRoasters";
import Cards from "../Card/CardsList";
import RoastersCards from "./RoastersCards";
import { getAll } from "@/API/apiGlobal";
import Roaster from "@/Models/roasterModel";

export default async function AllRoasters({ filter, sortBy }) {
  const roasters = await getAll(Roaster, filter, sortBy);

  return (
    <div>
      {roasters.map((roaster) => (
        <Cards key={roaster._id} render={<RoastersCards roaster={roaster} />} />
      ))}
    </div>
  );
}
