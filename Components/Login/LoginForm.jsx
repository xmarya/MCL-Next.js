"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "@/helpers/zodValidator";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {login } from "@/API/actionsAuth";
import { Form, FormButton, FormError } from "../Form/Form";
import Label from "../Form/Label";
import Input from "../Form/Input";


const defaultUser = {
  email: "admin@admin.admin",
  password: "123"
}
export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors: formErrors },
  } = useForm({ mode: "onBlur", resolver: zodResolver(LoginFormSchema) });

  async function handleFormSubmit(formData) {
    const result = await login(formData);

    if (result?.error) return toast.error(result.error.message);

    toast.success("Welcome Back!");
    reset();
    router.replace("/");
    //    router.push("/");
  }

  return (
    // <>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Label htmlFor="email">Email:</Label>
      <Input
      defaultValue={defaultUser.email}
        required
        type="email"
        name="email"
        id="email"
        {...register("email")}
      />
      <FormError $hasError={!!formErrors?.email?.message}>
      {formErrors?.email?.message || ""}
        </FormError>
      <Label htmlFor="password">Password:</Label>
      <Input
      defaultValue={defaultUser.password}
        required
        type="password"
        name="password"
        id="password"
        {...register("password")}
      />
      <FormError $hasError={!!formErrors?.password?.message}>
      {formErrors?.password?.message || ""}
      </FormError>

      <div>
        <FormButton>{isSubmitting ? "submitting..." : "login"}</FormButton>
      </div>
    </Form>
  );
}
