
import { getRoastersNames } from "@/API/apiRoasters";
import  { createContext, useContext } from "react";


const RoasterNamesContext = createContext();

async function RoasterNamesProvider({children}) {
    const names = await getRoastersNames();

    const namesAr = names?.map(({nameAr}) => ({value: nameAr, label: nameAr}));
    const namesEn = names?.map(({nameEn}) => ({value: nameEn, label: nameEn}));


    return <RoasterNamesContext.Provider value={{namesAr, namesEn}}>
        {children}
    </RoasterNamesContext.Provider> 
}

function useRoasterNames() {
    const context = useContext(RoasterNamesContext);

    if(context === undefined) throw new Error("RoasterNamesContext is being used outside its provider");

    return context;
}

export {RoasterNamesProvider, useRoasterNames}



