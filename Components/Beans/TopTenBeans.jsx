import { getTopTen } from "@/API/apiRanking";

import BeansTable from "./BeansTable";
import BeansOperations from "./BeansOperations";
import { Noto } from "@/app/layout";
import Link from "next/link";

export default async function TopTenBeans() {
    const beans = await getTopTen("Bean");

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h3 className={`${Noto.variable} section-heading-42`}>TopTenBeans comp.</h3>
        <BeansOperations />
      </div>
      <div className="flex flex-col items-center gap-6">
        <BeansTable beans={beans}/>
        <Link className={`${Noto.variable} text-13`} href="/beans">عرض جميع المحاصيل</Link>
      </div>
    </>
  );
}
