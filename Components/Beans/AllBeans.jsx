import { getAll, getFaves } from "@/API/apiGlobal";
import BeanCard from "./BeanCard";
import CardsList from "../Card/CardsList";
import Bean from "@/Models/beanModel";

export default async function AllBeans({ filter, sort, page }) {
  const {docs: beans, totalDocs: totalData} = await getAll(Bean, filter, sort, page);
  console.log(beans.length);
  const faves = await getFaves("Bean");

  // console.log(Object.entries(filter).length > 0); // ✅
  return (
    <div className="flex flex-col px-10">
      <CardsList totalData={totalData}>
        {beans.map((bean) => (
          <BeanCard key={bean._id} bean={bean} fave={faves.includes(bean._id)} />
        ))}
      </CardsList>
    </div>
  );
}

{/* {
  filter  && <p>{beans.length} نتيجة</p>
} */}