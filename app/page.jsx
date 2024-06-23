import { getBeans } from "@/API/apiBeans";
import { dbConnection } from "@/helpers/dbConnection"


// displays top-ten roasters/beans and latest 10 reviews
export default async function Home() {
    await dbConnection();
    return (
        <div>
            Helleoo there ?
        </div>
    )
}

