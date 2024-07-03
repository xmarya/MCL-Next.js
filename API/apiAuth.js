import User from "@/Models/userModel";
import { dbConnection } from "@/helpers/dbConnection";
import { verifySession } from "@/helpers/session";
import {cache} from 'react';


export const myDashboard = cache(async() => {
    // 1) verify the user's token:
    const {userId} = await verifySession();
    // console.log("role?", userId?.role);
    if(!userId) return null;

    try {
        // 2) fetch the logged-in user info:
        await dbConnection();
        const currentUser = await User.findById(userId);

        return currentUser;

    } catch (error) {
        throw new Error(error);
    }
});