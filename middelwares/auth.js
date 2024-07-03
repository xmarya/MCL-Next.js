import { getUser } from "@/API/apiUsers";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google"

const authConfig = {
    providers: [
    Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET
    }),
    ],
    
    callbacks: { // rememmber, what is inside callbacks are the app middlewares, they are placed between the comming request and the actulat route.
        authorized({ auth: currentSession, request }) { // returns true if the user is authorised to access the next protected route, the other way around is also applied
            console.log("calbacks:authorized");
            return !!currentSession?.user;// this (!!) convert any value to boolean, so if the user of the current session is undefined then it's false.
        },
        async signIn({user, account, profile, email, credentials}) { // this is a MD, it's going to be performed before the actual signIn function.
            // so we can do what we want before letting the user sing-in to the app/account.
            console.log("calbacks:signIn");
            try {
                const isExist = await getUser(user.email);
                // here I want to redirect the user to the signUp page to fill in all the necessary fields
                // Plus, I want to auto-fill the email field with the entered one
                // if(!isExist) await createUser({email: user.email, fullName: user.name});
                if(!isExist) console.log(user.email,"not exist");
                return true;

            } catch {
                return false
            }  
        },
        async session({ session, token, user  }) { // this md runs after the previous signIn md, and evey time the session is checked-out
            // console.log("since we have access to the user why we didn't use it instead of writing session.user?", user);
            const currentUser = await getUser(session.user.email);
            session.user.userId = currentUser.id;

            return session;
        },
    },
    // pages: {
    //     signIn: "/google-account-login"
    // }
}

export const { auth, handlers: {GET, POST}, signIn, signOut} = NextAuth(authConfig);