import { getTopTen } from "@/API/apiRanking";
import RoastersTable from "./RoastersTable";
import Link from "next/link";
import { Noto } from "@/app/layout";

export default async function TopTenRoasters() {
  const roasters = await getTopTen("Roaster");

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h3 className={`${Noto.variable} section-heading-42`}>
          TopTenRoasters comp.
        </h3>
      </div>
      <div className="flex flex-col items-center gap-6">
        <RoastersTable roasters={roasters} />
        <Link className={`${Noto.variable} text-13`} href="/roasters">
          عرض جميع المحامص
        </Link>
      </div>
    </>
  );
}
