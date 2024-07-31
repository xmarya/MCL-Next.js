

import BeansNotes from "./Filters/BeansNotes";
import BeansOrigins from "./Filters/BeansOrigins";
import BeansProcessTypes from "./Filters/BeansProcessTypes";
import BeansRating from "./Filters/BeansRating";
import RoastersNames from "./Filters/RoastersNames";
import SelectDrinkType from "./SelectsMenu/SelectDrinkType";


export default async function BeansFilter() {
  //localhost:3000/beans?typeOfProcessAr=مجففة&notesAr=شوكولاتة&لوز
  // for the same field with multiple values :
  // localhost:3000/beans?notesAr=شوكولاتة&لوز

  return (
    <div className="flex flex-col gap-3 p-6 mb-6">
        <BeansRating/>
        <RoastersNames/>
        <BeansOrigins/>
        <BeansNotes/>
        <BeansProcessTypes/>
        <SelectDrinkType/>
    </div>
  );
}
