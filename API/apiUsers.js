import User from "@/Models/userModel";
import { dbConnection } from "@/helpers/dbConnection";


// the process is still on the login/sign-up phase, 
// so we can only deal wih the only unique value we can get in
// this stage which is the email, not the userId
export async function getUser(email, password = "") { 
    await dbConnection();
    console.log("getUser API", email);
    const user = await User.findOne({email}).select("+password");
    console.log(user);
    if(!user) return null;

    // if(password) await checkPassword(password, user);
    
    return {userId: user.id, email: user.email};
}


async function checkLoginPassword(user, password) {

}

async function updateProfile(user, password) {

}

async function deleteAccount(user, password) {

}

async function updatePassword(user, password) {

}

async function forgetPassword(user, password) {

}

async function resetPassword(user, password) {

}