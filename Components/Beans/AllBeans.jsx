import { getBeans } from "@/API/apiBeans"

export default async function AllBeans({ filter, sort}) {
    console.log(filter);
    const beans = await getBeans(filter, sort);
    console.log(beans.length);
    return (
        <div>
            
        </div>
    )
}

