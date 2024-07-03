import Link from "next/link";

export default function Login() {
    return (
        <div>
            <h2>login page</h2>
            <p>here if the form</p>
            <p>
                doesn&apos;t have an account ? <Link href="/signup">Singup</Link>
            </p>

        </div>
    )
}

