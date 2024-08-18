import { getTopTen } from "@/API/apiRanking";

import BeansTable from "./BeansTable";
import { Noto } from "@/app/layout";
import Link from "next/link";
import Button from "../Button";

export default async function TopTenBeans() {
    const beans = await getTopTen("Bean");

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h3 className={`${Noto.variable} section-heading-42`}>TopTenBeans comp.</h3>
      </div>
      <div className="flex flex-col items-center gap-6">
        <BeansTable beans={beans}/>
        <Button $btnType="secondary">
          <Link className={`${Noto.variable} text-13`} href="/beans">عرض جميع المحاصيل</Link>
        </Button>
      </div>
    </>
  );
}
