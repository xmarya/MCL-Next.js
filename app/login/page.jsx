import LoginForm from "@/Components/Login/LoginForm";
import Link from "next/link";

export default function Login() {
    return (
        <div>
            <h2>login page</h2>
            <LoginForm/>
            <p>
                Doesn&apos;t have an account ? <Link href="/signup">Singup</Link>
            </p>
            <p>
                Forget your Password ? <Link href="/forgetPassword">Reset password</Link>
            </p>

        </div>
    )
}

