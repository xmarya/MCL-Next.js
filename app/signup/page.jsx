import SignupForm from "@/Components/Signup/SignupForm";
import Link from "next/link";

export default function Signup() {
    return (
        <div>
            <h2>sign up page</h2>
            <SignupForm/>
            <p>
                Have an account ? <Link href="/login">Login</Link>
            </p>

        </div>
    )
}

