import { AuthLayout } from "@/Components/AuthLayout";
import StyledLink from "@/Components/Link";
import LoginForm from "@/Components/Login/LoginForm";

export default function Login() {
    return (
        <AuthLayout>
            <h2 className="section-heading-42">تسجيل الدخول</h2>
            <LoginForm/>
            <p className="grey-paragraph flex items-center justify-center gap-2">
                Doesn&apos;t have an account ? <StyledLink href="/signup">Singup</StyledLink>
            </p>
            <p className="grey-paragraph flex items-center justify-center gap-2">
                Forget your Password ? <StyledLink href="/forgetPassword">Reset password</StyledLink>
            </p>

        </AuthLayout>
    )
}

