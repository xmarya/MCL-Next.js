import "server-only"
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const cookieOpt = {
    name: "jwt",
    expires: new Date(Date.now() + process.env.COOKIE_EXPIREING_TIME * 24 * 60 * 60 * 1000),
    secure: true, // true means the cookie will only be send on an encrybted connection (https). By the way, this wouldn't work because we're not using https so the cookies will not be created and be sent to the client. To get around this we're going to deactivate this opt and only activate it in production by make the whole opt a variable like this.
    httpOnly: true, // means the cookie can't be accessed or modified in anyway by the browser in client's machine which help us avoiding the XSS attacks. but this
    // will make us face a problem when implementing logout functionality, so to solve this without losing one of our security pieces
    // we're going to create a route for logout and send back via it a cookie with the exact same name but without the token
    // and that is going to overwrite the current cookie in the browser .
}

const key = new TextEncoder().encode(process.env.SALT);

export async function encrypt(payload) {
    console.log("2");
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime("1day")
        .sign(key);
}

export async function decrypt(session) {
    try {
        const {payload} = await jwtVerify(session, key, { algorithms: ["HS256"]});
        return payload;
    } catch (error) {
        return null;
    }

}

// this func is going to be invoked to create a new session after a successful signup or login process
export async function createSession(userId) {
    console.log("inside the session creator");
    const expires = cookieOpt.expires;
    console.log("1");
    const token = await encrypt({userId, expires});
    console.log("3", token);
    
    cookies().set(cookieOpt.name, token, {...cookieOpt});
    console.log("4");
}

export async function verifySession() {
    const cookie = cookies().get(cookieOpt.name)?.value;
    const session = await decrypt(cookie);

    if(!session?.userId) redirect("/login");

    return { userId: session.userId}

}

// this func is going to be invoked to remove the current user session when logout process is in progress
export async function deleteSession() {
    cookies().delete(cookieOpt.name);
    redirect("/login");
}