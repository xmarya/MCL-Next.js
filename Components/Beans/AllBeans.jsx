import { getBeans } from "@/API/apiBeans";
import Cards from "../Card/Cards";
import BeanCard from "./BeanCard";

export default async function AllBeans({ filter, sort }) {
  const beans = await getBeans(filter, sort);
  console.log(beans.length);

  return (
    <Cards>
      {beans.map((bean) => (
        <BeanCard key={bean._id} bean={bean} />
      ))}
    </Cards>
  );
}
