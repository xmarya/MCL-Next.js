"use client"

import { deleteAccount } from "@/API/actionsAuth";
import { LoginFormSchema } from "@/helpers/zodValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function DeleteAccountForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors: formErrors },
    } = useForm({ mode: "onBlur", resolver: zodResolver(LoginFormSchema) });

  async function handleFormSubmit(formData) {
    const result = await deleteAccount(formData);

    if (result?.error) return toast.error(result.error.message);

    reset();
    router.replace("/");
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
      <label htmlFor="password">Password:</label>
      <input
        required
        type="password"
        name="password"
        id="password"
        {...register("password")}
      />
      {formErrors?.password?.message && <p>{formErrors.password.message}</p>}

      <div>
        <button>{isSubmitting ? "Deleting..." : "DELETE"}</button>
      </div>
    </form>
    );
}

