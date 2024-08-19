import { AuthLayout } from "@/Components/AuthLayout";
import StyledLink from "@/Components/Link";
import SignupForm from "@/Components/Signup/SignupForm";

export default function Signup() {
    return (
        <AuthLayout>
            <h2 className="section-heading-42">تسجيل مستخدم جديد</h2>
            <SignupForm/>
            <p className="grey-paragraph flex items-center justify-center gap-1">
                لديك حساب بالفعل؟
                <StyledLink href="/login">دخول</StyledLink>
            </p>
        </AuthLayout>
    )
}

