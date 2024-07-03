"use client";

import { changePassword } from "@/API/actionsAuth";
import { ChangePasswordSchema } from "@/helpers/zodValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors: formErrors },
  } = useForm({ mode: "onBlur", resolver: zodResolver(ChangePasswordSchema) });

  async function handleFormSubmit(formData) {
    const result = await changePassword(formData);

    if (result?.error) return toast.error(result.error.message);

    toast.success("your account password has changed!");
    reset();
  }
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label htmlFor="currentPassword">Current Password:</label>
      <input
        required
        type="password"
        name="currentPassword"
        id="currentPassword"
        {...register("currentPassword")}
      />
      {formErrors?.currentPassword?.message && (
        <p>{formErrors.currentPassword.message}</p>
      )}

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
        <button>{isSubmitting ? "submitting..." : "change password"}</button>
      </div>
    </form>
  );
}
