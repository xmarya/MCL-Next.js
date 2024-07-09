
import User from "@/Models/userModel";
import { dbConnection } from "@/helpers/dbConnection";
import { verifySession } from "@/helpers/session";



export async function getCurrentUser() {
    const {userId} =  await verifySession();
    
    if(!userId) return null;

    try {
        await dbConnection();
        const currentUser = await User.findById(userId);

        return currentUser;
        
    } catch (error) {
        throw new Error(error);
    }
}

export async function getUser(id) { 
    try {
        await dbConnection();
        
    } catch (error) {
        
    }
}
