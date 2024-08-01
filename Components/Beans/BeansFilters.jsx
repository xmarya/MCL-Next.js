
import BeansNotes from "./Filters/BeansNotes";
import BeansOrigins from "./Filters/BeansOrigins";
import BeansProcessTypes from "./Filters/BeansProcessTypes";
import RoastersNames from "./Filters/RoastersNames";
import SelectDrinkType from "./SelectsMenu/SelectDrinkType";
import SelectRating from "./SelectsMenu/SelectRating";


export default async function BeansFilter({params = "ar"}) {
  //localhost:3000/beans?typeOfProcessAr=مجففة&notesAr=شوكولاتة&لوز
  // for the same field with multiple values :
  // localhost:3000/beans?notesAr=شوكولاتة&لوز

  return (
    <div className="flex flex-col gap-3 mb-6">
        <SelectRating/>
        <RoastersNames locale={params}/>
        <BeansOrigins locale={params}/>
        <BeansNotes locale={params}/>
        <BeansProcessTypes locale={params}/>
        <SelectDrinkType locale={params}/>
    </div>
  );
}
