import TopTenBeans from "@/Components/Beans/TopTenBeans";
import { Suspense } from "react";

// displays top-ten roasters/beans and latest 10 reviews
export default async function Home() {
    return (
        <div>
            Helleoo there ?
            <Suspense fallback="Loading...">
                <TopTenBeans/>
            </Suspense>
        </div>
    )
}

