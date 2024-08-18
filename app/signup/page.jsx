import { AuthLayout } from "@/Components/AuthLayout";
import SignupForm from "@/Components/Signup/SignupForm";
import Link from "next/link";

export default function Signup() {
    return (
        <AuthLayout>
            <h2 className="section-heading-42">sign up page</h2>
            <SignupForm/>
            <div className="bg-orange-400">Have an account? <Link href="/login">Login</Link></div>
        </AuthLayout>
    )
}

