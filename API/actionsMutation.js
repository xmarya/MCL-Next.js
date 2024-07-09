"use server"

import User from "@/Models/userModel";
import { globalAppErrors } from "@/data/globalErrorsMessages";
import { dbConnection } from "@/helpers/dbConnection";
import { errorController } from "@/helpers/errorController";
import { createSession } from "@/helpers/session";

export async function signup({username, email, password, passwordConfirm}){
    console.log("SA signup");
    try {
        await dbConnection();
        // 1) create a new user in the db:
        const newUser = await User.create({username, email, password, passwordConfirm});
        console.log("🎭",newUser);
        // 2) create a session:
        console.log(newUser.id);
        await createSession(newUser._id, newUser.role);
    } catch (error) {
        console.log("💣💣",error);
        const errorMessage = errorController(error);
        return errorMessage;
    }

};
