import MostRatedBeanLastMonth from "@/Components/Beans/MostRatedBeanLastMonth";
import TopTenBeans from "@/Components/Beans/TopTenBeans";
import MostRatedRoasterLastMonth from "@/Components/Roasters/MostRatedRoasterLastMonth";
import { Suspense } from "react";

// displays top-ten roasters/beans and latest 10 reviews
export default async function Home() {
    return (
        <div>
            Helleoo there ?
            <Suspense fallback="Loading...">
                {/* <TopTenBeans/> */}
                <MostRatedBeanLastMonth/>
            </Suspense>
        </div>
    )
}

