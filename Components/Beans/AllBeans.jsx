import { getBeans } from "@/API/apiBeans"

export default async function AllBeans({ filter, sort}) {
    const beans = await getBeans(filter, sort);
    console.log(beans.length);
    return (
        <div>
            
        </div>
    )
}

