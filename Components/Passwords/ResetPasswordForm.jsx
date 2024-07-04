"use client"

import { resetPassword } from "@/API/actionsAuth";
import { ResetPasswordSchema } from "@/helpers/zodValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function ResetPasswordForm({resetToken}) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors: formErrors },
      } = useForm({ mode: "onBlur", resolver: zodResolver(ResetPasswordSchema) });
    
      async function handleFormSubmit(formData) {
        const result = await resetPassword({resetToken, ...formData});
    
        if (result?.error) return toast.error(result.error.message);
    
        toast.success("your account password has been rest!");
        reset();

        router.replace("/login");
      }
      return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>   
          <label htmlFor="newPassword">New Password:</label>
          <input
            required
            type="password"
            name="newPassword"
            id="newPassword"
            {...register("newPassword")}
          />
          {formErrors?.newPassword?.message && (
            <p>{formErrors.newPassword.message}</p>
          )}
    
          <label htmlFor="newPasswordConfirm">New Password Confirm:</label>
          <input
            required
            type="password"
            name="newPasswordConfirm"
            id="newPasswordConfirm"
            {...register("newPasswordConfirm")}
          />
          {formErrors?.newPasswordConfirm?.message && (
            <p>{formErrors.newPasswordConfirm.message}</p>
          )}
    
          <div>
            <button>{isSubmitting ? "submitting..." : "confirm"}</button>
          </div>
        </form>
    )
}

