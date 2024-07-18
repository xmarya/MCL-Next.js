
import User from "@/Models/userModel";
import { dbConnection } from "@/helpers/dbConnection";
import { verifySession } from "@/helpers/session";



export async function getCurrentUser() {
    
    const session =  await verifySession();
    if(!session) return null;

    const { userId } = session;

    try {
        await dbConnection();
        const currentUser = await User.findById(userId);

        return currentUser;
        
    } catch (error) {
        throw new Error(error);
    }
}

export async function getUser(id) { // no need to login, anyone can view others' profile
    try {
        await dbConnection();
        
    } catch (error) {
        
    }
}

export async function getFaves(model) {
    // const { userId } = await verifySession();
    // if(!userId) throw new Error("you must login to add it to your faviroutes");

    const userId = "668ccaf9391b8dad3456d0ee";
    const field = "favourite".concat(model+"s"); // = favouriteBeans || favouriteRoasters

    try {
        await dbConnection();
        const faves = (await User.findById(userId).select(field))[field];
        console.log(typeof faves, faves);

        return faves;
        
    } catch (error) {
        console.log("getFaves",error);
    }
}