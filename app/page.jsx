import MostRatedBeanLastMonth from "@/Components/Beans/MostRatedBeanLastMonth";
import TopTenBeans from "@/Components/Beans/TopTenBeans";
import MostRatedRoasterLastMonth from "@/Components/Roasters/MostRatedRoasterLastMonth";
import TopTenRoasters from "@/Components/Roasters/TopTenRoasters";
import { Suspense } from "react";
import { IBM } from "./layout";

// displays top-ten roasters/beans and latest 10 reviews
export default async function Home() {

    return (
        <div>
            <h1 className={`${IBM.className} main-heading-52 text-center`}>الصفحة الرئيسية</h1>
            <Suspense fallback="Loading...">
                {/* <TopTenBeans/> */}
                {/* <TopTenRoasters/> */}
                 {/* <MostRatedBeanLastMonth/> */}
                {/* <MostRatedRoasterLastMonth/> */}
            </Suspense>
        </div>
    )
}

