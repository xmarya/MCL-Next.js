
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
