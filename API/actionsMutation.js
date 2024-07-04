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
        await createSession(newUser._id);
    } catch (error) {
        console.log("💣💣",error);
        const errorMessage = errorController(error);
        return errorMessage;
    }

};

// export async function login({email, password}) {
//     // 1- checking email and pawword (MOVE THIS PART TO THE CLIENT-SIDE BEFORE INVOKING THE FUNCTION):
//     // if (!email || !password) return next(new AppError(400, "Please provide your email and password to login !")); 
//     try {
//         await dbConnection();
//         // 1- get the user by the provided email :
//         const thisUser = await User.findOne({email}).select("+password");

//         // 2- if the user is exist :
//         if(!thisUser) return  {error :{message: globalAppErrors.noUserWithThisEmail.en}};

//         // 3- if the password is correct:
//         if(!(await thisUser.comparePasswords(password, thisUser.password))) return {error: {message: globalAppErrors.incorrectPassword.ar}};

//         // 4- no errors? then issue a new session token:
//         await createSession(thisUser.id);
        
//     } catch (error) {
//         throw new Error(error);
//     }
// }