import Cards from "../Card/CardsList";
import RoastersCards from "./RoastersCards";
import { getAll } from "@/API/apiGlobal";
import Roaster from "@/Models/roasterModel";
import CardsList from "../Card/CardsList";

export default async function AllRoasters({ filter, sortBy }) {
  const {docs: roasters, totalDocs: totalData} = await getAll(Roaster, filter, sortBy);
  console.log(roasters.length);
  return (
    <CardsList>
    {roasters.map((roaster) => (
      <Cards key={roaster._id} render={<RoastersCards roaster={roaster} />} />
    ))}
    </CardsList>
  );
}
