"use client";

import { forgetPassword } from "@/API/actionsAuth";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { EmailSchema } from "@/helpers/zodValidator";
import toast from "react-hot-toast";

export default function ForgetPasswordForm() {
    const {
      register,
      handleSubmit,
      reset,
        formState: { isSubmitting, errors: formErrors },
      } = useForm({ mode: "onBlur", resolver: zodResolver(EmailSchema) });

    async function handleFormSubmit(formData) {
      console.log("fofo", formData);
      const result = await forgetPassword(formData);
  
      if (result?.error) return toast.error(result.error.message);
  
      toast.success("Please click on the link that has been sent to your email to reset your password.");
      reset();
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label htmlFor="email">Email:</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              {...register("email")}
            />
            {formErrors?.email?.message && <p>{formErrors.email.message}</p>}
              <div>
                <button>{isSubmitting ? "submitting..." : "reset password"}
                  {console.log("clicked")}
                </button>
              </div>
        </form>
    )
}

