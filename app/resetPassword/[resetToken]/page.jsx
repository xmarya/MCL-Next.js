import ResetPasswordForm from "@/Components/Passwords/ResetPasswordForm";

export default function ResetPassword({params: {resetToken}}) {
    return (
        <div>
            <h3>Enter new password:</h3>
            <ResetPasswordForm resetToken={resetToken}/>
        </div>
    )
}

