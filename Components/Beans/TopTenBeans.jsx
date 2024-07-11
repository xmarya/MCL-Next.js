import { getTopTen } from "@/API/apiRanking";

import BeansTable from "./BeansTable";
import BeansOperations from "./BeansOperations";
import { Noto } from "@/app/layout";

export default async function TopTenBeans() {
    const beans = await getTopTen("Bean");

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h3 className={`${Noto.variable} section-heading-42`}>TopTenBeans comp.</h3>
        <BeansOperations />
      </div>
      <div>
        <BeansTable beans={beans}/>
      </div>
    </>
  );
}
