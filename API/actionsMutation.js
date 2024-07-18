"use server"

import User from "@/Models/userModel";
import { dbConnection } from "@/helpers/dbConnection";
import { globalAppErrors } from "@/data/globalErrorsMessages";
import { errorController } from "@/helpers/errorController";
import { verifySession } from "@/helpers/session";
import { revalidatePath } from "next/cache";

export async function updateFave(model, docId) {
    console.log("addfave", model, docId);
    if(!model || !docId) return;

    // check if there is a loging-in user:
    // const { userId } = await verifySession();
    // if(!userId) throw new Error("you must login to add it to your faviroutes");
    const userId = "668ccaf9391b8dad3456d0ee";
    const field = "favourite".concat(model+"s"); // = favouriteBeans || favouriteRoasters
    try {
        await dbConnection();
        const thisUser = await User.findById(userId).select(field);
        let faves = JSON.parse(JSON.stringify(thisUser[field]));

        // 👇🏻 a better way of doing it:
        // const faves = (await User.findById(userId).select(field))[field];

        /*
            I ended up using the the two-steps way of getting the faves array, because
            I must HAVE the user's doc in order to update the original array using the approache 
            of unknown field: thisUser[field],
            rememmber that I don't know which faves array I'm goona to update, is it the beans ? or the roasters?
            if I haven't had the thisUser then I must get it using User.findById(userId) in order to implement it this way.
            so, I decided to get the doc from the beginning.
        */

        const exist = faves.includes(docId);

        if(!exist) faves.push(docId);

        if(exist) faves = faves.filter(fave => fave !== docId);

        thisUser[field] = faves;
        await thisUser.save({ validateBeforeSave: false});
        // await thisUser.save({ validateModifiedOnly: true});

        // revalidatePath("/beans");

    } catch (error) {
        console.log("updateFave",error);
    }
}
