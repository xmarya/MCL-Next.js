import { NextResponse } from "next/server";
import { auth } from "@/middelwares/auth";
import { cookies } from "next/headers";
import { decrypt } from "./helpers/session";


const protectedRoutesRegex = /^\/dashboard.*/;;
export async function middleware(request) {
  const {pathname} = request.nextUrl;

  if(protectedRoutesRegex.test(pathname)) {
    // 1) is there a valid session ?
    const cookie = cookies().get("jwt")?.value;
    console.log("🍪", cookie);
    const token = await decrypt(cookie);
    console.log("🔑", token);

    // const session = await auth();
    // console.log("🔎",session);
    // 2) no? redirect the user:
    if(!token?.userId) return NextResponse.redirect(new URL(`/login`, request.nextUrl.origin));

    
    // 3) yes? let the user access the protected route:
    return NextResponse.next();
  }

  // if(pathname === "/google-account-login") return auth(request);


  return NextResponse.next();

}


  export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  };