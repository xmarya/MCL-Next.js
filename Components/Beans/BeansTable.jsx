import { getBeans } from "@/API/apiBeans";

export default async function BeansTable({filter, sort}) {
    //http://localhost:3000/beans?typeOfProcessAr=مجففة&notesAr=شوكولاتة&isRare=true
    const beans = await getBeans(filter, sort);
    if(!beans.length) return <p>No data were found</p>
    return (
        <div>{
                Object.values(beans).map(bean => console.log(bean))
            }</div>
    )
}

