import User from "@/Models/userModel";
import { dbConnection } from "@/helpers/dbConnection";


export async function getUser(email, password = "") { 
    await dbConnection();
    
}
