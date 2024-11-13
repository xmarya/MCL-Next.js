import { getTopTen } from "@/API/apiRanking";
import RoastersTable from "./RoastersTable";
import Link from "next/link";
import { Noto } from "@/app/layout";
import Button from "../Button";
import { FlexBox } from "../Layouts/FlexBox";

export default async function TopTenRoasters() {
  const roasters = await getTopTen("Roaster");

  return (
    <FlexBox $gap="1.6rem">
      <h3 className={`${Noto.variable} section-heading-42`}>
        TopTenRoasters comp.
      </h3>

      <RoastersTable roasters={roasters} />

      <Button $btnType="secondary">
        <Link className={`${Noto.variable} text-13`} href="/roasters">
          عرض جميع المحامص
        </Link>
      </Button>
    </FlexBox>
  );
}
