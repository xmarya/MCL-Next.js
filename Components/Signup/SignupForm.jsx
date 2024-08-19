"use client";

import { signup } from "@/API/actionsAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupFormSchema } from "@/helpers/zodValidator";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Form, FormButton, FormError } from "../Form/Form";
import Input from "../Form/Input";
import Label from "../Form/Label";

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
      <Label htmlFor="username">Username:</Label>
      <Input
        required
        type="username"
        name="username"
        id="username"
        {...register("username")}
      />
      <FormError $hasError={!!formErrors?.username?.message}>
        {formErrors?.username?.message || ""}
      </FormError>
      <Label htmlFor="email">Email:</Label>
      <Input
        required
        type="email"
        name="email"
        id="email"
        {...register("email")}
      />
      {/* {formErrors?.email?.message && <p>{formErrors.email.message}</p>} */}
      <FormError $hasError={!!formErrors?.email?.message}>
        {formErrors?.email?.message || ""}
      </FormError>
      <Label htmlFor="password">Password:</Label>
      <Input
        required
        type="password"
        name="password"
        id="password"
        {...register("password")}
      />
      <FormError $hasError={!!formErrors?.password?.message}>
        {formErrors?.password?.message || ""}
      </FormError>
      <Label htmlFor="passwordConfirm">Confirm Your Password:</Label>
      <Input
        required
        type="password"
        name="passwordConfirm"
        id="passwordConfirm"
        {...register("passwordConfirm")}
      />
      <FormError $hasError={!!formErrors?.passwordConfirm?.message}>
        {formErrors?.passwordConfirm?.message || ""}
      </FormError>

      <FormButton>{isSubmitting ? "submitting..." : "signup"}</FormButton>
    </Form>
  );
}
