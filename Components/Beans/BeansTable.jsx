import { getBeans } from "@/API/apiBeans";


export default async function BeansTable({filter, sort}) {
    //http://localhost:3000/beans?typeOfProcessAr=مجففة&notesAr=شوكولاتة&isRare=true
    const beans = await getBeans(filter, sort);

    if(!beans.length) return <p>No data were found</p>
    console.log(beans.length);
    return (
        <div>
            <div>{beans[0].ranking}</div>
        </div>
    )
}

