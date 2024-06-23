import mongoose from "mongoose";


const db_URI = process.env.NODE_ENV === "production" ? process.env.DB_ATLAS : process.env.DB_LOCAL
let isConnected = false;


export async function dbConnection() {
    // there is a going on connection ?
    if(isConnected) {
        console.log("already connected");
        return;
    };

    // no connection ?
    try {
        await mongoose.connect(db_URI);
        isConnected = true;
        console.log("DB CONNECTED!");
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong while connection to the DB");
    }


}