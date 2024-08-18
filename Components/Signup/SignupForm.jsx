"use client";

import { signup } from "@/API/actionsAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormSchema } from "@/helpers/zodValidator";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Form, FormButton } from "../Form";

export default function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors: formErrors },
  } = useForm({ mode: "onBlur", resolver: zodResolver(SignupFormSchema) });

  async function handleFormSubmit(formData) {
    const result = await signup(formData);

    if (result?.error) return toast.error(result.error.message);

    toast.success("Successful Signup!");
    reset();
    router.replace("/");
  }

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <label htmlFor="username">Username:</label>
      <input
        required
        type="username"
        name="username"
        id="username"
        {...register("username")}
      />
      {formErrors?.username?.message && <p>{formErrors.username.message}</p>}
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
      <label htmlFor="passwordConfirm">Confirm Your Password:</label>
      <input
        required
        type="password"
        name="passwordConfirm"
        id="passwordConfirm"
        {...register("passwordConfirm")}
      />
      {formErrors?.passwordConfirm?.message && (
        <p>{formErrors.passwordConfirm.message}</p>
      )}

      <FormButton>{isSubmitting ? "submitting..." : "signup"}</FormButton>
      
    </Form>
  );
}
