import { FlexBox } from "../Layouts/FlexBox";
import BeansNotes from "./Filters/BeansNotes";
import BeansOrigins from "./Filters/BeansOrigins";
import BeansProcessTypes from "./Filters/BeansProcessTypes";
import BeansVarieties from "./Filters/BeansVarieties";
import RoastersNames from "./Filters/RoastersNames";
import SelectDrinkType from "./SelectsMenu/SelectDrinkType";
import SelectRating from "./SelectsMenu/SelectRating";


export default function BeansFilter({params = "ar"}) {
  return (
    <FlexBox $align="stretch" $gap="1.4rem">
        <SelectRating/>
        <RoastersNames locale={params}/>
        <BeansOrigins locale={params}/>
        <BeansProcessTypes locale={params}/>
        <BeansVarieties locale={params}/>
        <BeansNotes locale={params}/>
        <SelectDrinkType locale={params}/>
    </FlexBox>
  );
}
