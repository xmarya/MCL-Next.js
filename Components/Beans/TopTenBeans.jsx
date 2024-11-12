import { getTopTen } from "@/API/apiRanking";

import BeansTable from "./BeansTable";
import { Noto } from "@/app/layout";
import Link from "next/link";
import Button from "../Button";

export default async function TopTenBeans() {
    const beans = await getTopTen("Bean");

  return (
    <>
        <h3 className={`${Noto.variable}`}>TopTenBeans comp.</h3>

        <BeansTable beans={beans}/>
        
        <Button $btnType="secondary">
          <Link className={`${Noto.variable}`} href="/beans">عرض جميع المحاصيل</Link>
        </Button>
    </>
  );
}
