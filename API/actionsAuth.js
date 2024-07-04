"use server"

import User from "@/Models/userModel";
import { globalAppErrors } from "@/data/globalErrorsMessages";
import { dbConnection } from "@/helpers/dbConnection";
import { createSession, deleteSession, verifySession } from "@/helpers/session";
import {cache} from 'react';
import crypto from "crypto";



export async function login({email, password}) {
    // 1- checking email and pawword (MOVE THIS PART TO THE CLIENT-SIDE BEFORE INVOKING THE FUNCTION):
    // if (!email || !password) return next(new AppError(400, "Please provide your email and password to login !")); 
    try {
        await dbConnection();
        // 1- get the user by the provided email :
        const thisUser = await User.findOne({email}).select("+password");

        // 2- if the user is exist :
        if(!thisUser) return  {error :{message: globalAppErrors.noUserWithThisEmail.en}};

        // 3- if the password is correct:
        if(!(await thisUser.comparePasswords(password, thisUser.password))) return {error: {message: globalAppErrors.incorrectPassword.ar}};

        // 4- no errors? then issue a new session token:
        await createSession(thisUser.id);
        
    } catch (error) {
        throw new Error(error);
    }
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

export async function updateProfile(formData) {

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
        
        // 4- Save them, -the Validation in save property is true by default-:
        await thisUser.save();
        
        // 5- Generate a new JWT token and send it back to the browser header to log the user in:
        await createSession(thisUser.id);

    } catch (error) {
        throw new Error(error);
    }

}

export async function forgetPassword({email}) {

    try {
        await dbConnection();
        const user = await User.findOne({email});
        if(!user) return {error :{message: globalAppErrors.dbNoEmailAddress.en}};

        // 2) Has the user requested a password reset token before ?
        const hasTokenExpired = user.passwordResetExpires;

        // if the expiration of the token is greater than now (still in the future) it means it hasn't expired.
        if(hasTokenExpired > Date.now()) return {error: {message : globalAppErrors.validResetToken.en}};

        // 3) Generat a random RESET token -different from jwt's- :
        const randomToken = user.generateRandomToken();
        // when we're calling generateRandomToken(), 
        // inside it we changed passwordResetToken and passwordResetExpires fields but havn't save the doc yet:
        await user.save({ validateBeforeSave: false});
        // disable all the validators we've set on the schema.

        // 4) build up the reset password link:
        const host = process.env.NODE_ENV === "development" ? process.env.DEV_HOST : process.env.PROD_HOST;
        const resetURL = `${host}/resetPassword/${randomToken}`;
        console.log(resetURL);

    } catch (error) {
        
        thisUser.passwordResetToken = undefined;
        thisUser.passwordResetExpires = undefined;
        await thisUser.save({ validateBeforeSave: false});

        throw new Error(error);
    }
    
}

export async function resetPassword({resetToken, newPassword, newPasswordConfirm}) {
    console.log(resetToken);

    // 1- Get the user based on the token (rememmber that we've stored in the db?) :
    const hasedToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    
    try {
        await dbConnection();
        const thisUser = await User.findOne({passwordResetToken: hasedToken, passwordResetExpires: { $gt: Date.now()}});
    
        // 2- Is the user exist ? Token has expire ?
        if(!thisUser) return {error: {message: globalAppErrors.invalidResetToken.en}};
        
        // 3- Alowing the user to set the new password :
        thisUser.password = newPassword;
        thisUser.passwordConfirm = newPasswordConfirm;
        thisUser.passwordResetToken = undefined;
        thisUser.passwordResetExpires = undefined;

        // 4- Update the db :
        await thisUser.save(); // here we didn't turn off the validator, on contrary we want to validate the the password and its confirm are matching .
        // for anything related to passwords it must be save in order to run all the validators and the pre("save") hooks, rememmber they only run
        // on create() and save(), not update().
    } catch (error) {
        throw new Error(error);
    }
    

}

export async function deleteAccount({email, password}) {
    console.log(email, password);
    // 1) get the userId from the session:
    const {userId} = await verifySession();
    if(!userId) return null;
    
    try {
        await dbConnection();
        
        const thisUser = await User.findById(userId).select("+password email");
        console.log("🎭",thisUser);

        if (email !== thisUser.email || !(await thisUser.comparePasswords(password, thisUser.password)))
            return {error: {message: globalAppErrors.deleteAccount.en}};

        await User.findByIdAndDelete(thisUser.id);
    } catch (error) {
        
    }
}

export async function logout() {
    await deleteSession();
}