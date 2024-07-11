"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "@/helpers/zodValidator";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {login } from "@/API/actionsAuth";


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
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label htmlFor="email">Email:</label>
      <input
      defaultValue={defaultUser.email}
        required
        type="email"
        name="email"
        id="email"
        {...register("email")}
      />
      {formErrors?.email?.message && <p>{formErrors.email.message}</p>}
      <label htmlFor="password">Password:</label>
      <input
      defaultValue={defaultUser.password}
        required
        type="password"
        name="password"
        id="password"
        {...register("password")}
      />
      {formErrors?.password?.message && <p>{formErrors.password.message}</p>}

      <div>
        <button>{isSubmitting ? "submitting..." : "login"}</button>
      </div>
    </form>

    {/* <form action={googleLogin}>
      <span>&dash;OR&dash;</span>
      <div>
      <button>
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Login with Google account</span>
      </button>
      </div>
    </form> */}
    </>
  );
}
