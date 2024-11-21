import { getTopTen } from "@/API/apiRanking";

import BeansTable from "./BeansTable";
import { Noto } from "@/app/layout";
import Link from "next/link";
import Button from "../Buttons/Button";
import { FlexBox } from "../Layouts/FlexBox";

export default async function TopTenBeans() {
  const beans = await getTopTen("Bean");

  return (
    <FlexBox $gap="1.6rem">
      <h3 className={`${Noto.variable}`}>TopTenBeans comp.</h3>

      <BeansTable beans={beans} />

      <Button $btnType="secondary">
        <Link className={`${Noto.variable}`} href="/beans">
          عرض جميع المحاصيل
        </Link>
      </Button>
    </FlexBox>
  );
}
