"use server"

import User from "@/Models/userModel";
import { dbConnection } from "@/helpers/dbConnection";
import { errorController } from "@/helpers/errorController";
import { createSession } from "@/helpers/session";

export async function signup(formData){
    console.log("SA signup");
    const {username, email, password, passwordConfirm} = formData;
    try {
        await dbConnection();
        // 1) create a new user in the db:
        const newUser = await User.create({username, email, password, passwordConfirm});
        console.log("🎭",newUser);
        // 2) create a session:
        console.log(newUser.id);
        await createSession(newUser._id);
    } catch (error) {
        console.log("💣💣",error);
        const errorMessage = errorController(error);
        return errorMessage;
    }

};