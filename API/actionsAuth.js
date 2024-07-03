"use server"
import User from "@/Models/userModel";
import { globalAppErrors } from "@/data/globalErrorsMessages";
import { dbConnection } from "@/helpers/dbConnection";
import { verifySession } from "@/helpers/session";
import {cache} from 'react';


export async function updateProfile({user, password}) {

}

export async function changePassword({currentPassword, newPassword, newPasswordConfirm}) {

    // 1) get the userId from the session:
    const {userId} = await verifySession();
    if(!userId) return null;

    try {
        await dbConnection();
        // 2) get the user from the db based on the id:
        const thisUser = await User.findById(userId).select("+password");

        // 3) Confirm if the user actually is who he says he is by asking to provide the current password:
        const currentPasswordConfirmation = currentPassword;
        if( !(await thisUser.comparePasswords(currentPasswordConfirmation, thisUser.password))) return {error: {message: globalAppErrors.changePasswordIncorrect.en}};

        // 3- Okay? allow the changes :
        thisUser.password = newPassword;
        thisUser.passwordConfirm = newPasswordConfirm;

    } catch (error) {
        throw new Error(error);
    }

}

export async function forgetPassword({user, password}) {

}

export async function resetPassword({user, password}) {

}

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

export async function deleteAccount({user, password}) {

}