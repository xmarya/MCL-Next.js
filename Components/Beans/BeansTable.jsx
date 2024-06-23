import { deleteBean} from "@/API/apiBeans";


export default async function BeansTable({filter, sort}) {
    //http://localhost:3000/beans?typeOfProcessAr=مجففة&notesAr=شوكولاتة&isRare=true
    // const beans = await getBeans(filter, sort);
    // console.log(typeof beans);
    // console.log(beans);
    // if(!beans.length) return <p>No data were found</p>
    const message = await deleteBean();
    return (
        <div>{message}</div>
    )
}

