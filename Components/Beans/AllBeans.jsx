import { getBeans } from "@/API/apiBeans";
import { getAll, getFaves } from "@/API/apiGlobal";
import BeanCard from "./BeanCard";
import CardsList from "../Card/CardsList";
import Bean from "@/Models/beanModel";

export default async function AllBeans({ filter, sort }) {
  // const beans = await getBeans(filter, sort);
  const beans = await getAll(Bean, filter, sort);
  const faves = await getFaves("Bean");

  return (
    <CardsList>
      {beans.map((bean) => (
        <BeanCard key={bean._id} bean={bean} fave={faves.includes(bean._id)} />
      ))}
    </CardsList>
  );
}
