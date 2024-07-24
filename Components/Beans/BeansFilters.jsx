

// const StyledFilter = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   flex-wrap: nowrap;
//   align-items: center;
//   padding: 1.5rem;
//   margin-bottom: 1.6rem;

import BeansNotes from "./Filters/BeansNotes";
import BeansOrigins from "./Filters/BeansOrigins";
import RoastersNames from "./Filters/RoastersNames";
import SelectDrinkType from "./SelectsMenu/SelectDrinkType";
import SelectProcessType from "./SelectsMenu/SelectProcessType";


export default async function BeansFilter() {
  //http://localhost:3000/beans?typeOfProcessAr=مجففة&notesAr=شوكولاتة&notesAr=لوز
  // for the same field with multiple values :
  // http://localhost:3000/beans?notesAr=شوكولاتة&لوز



  return (
    <div className="flex flex-col p-6 mb-6">
        <RoastersNames/>
        <BeansOrigins/>
        <BeansNotes/>
        <SelectProcessType/>
        <SelectDrinkType/>
    </div>
  );
}
