import { z } from 'zod';

export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(6, { message: 'your username must be at least 6 characters.' })
    .max(15, {message: "your username must be 15 characters at maximum."})
    .trim(),
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(1, { message: 'Be at least 8 characters long' })
    // .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    // .regex(/[0-9]/, { message: 'Contain at least one number.' })
    // .regex(/[^a-zA-Z0-9]/, {
    //   message: 'Contain at least one special character.',
    // })
    .trim(),
    passwordConfirm: z.string().min(1, { message: 'Be at least 8 characters long' }).trim()
}).refine((data) => data.password === data.passwordConfirm, {
    message: "Please make sure the passwords are matching",
    path: ["passwordConfirm"],
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(1, { message: 'Password field must not be empty.' }),
});

export const ChangePasswordSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string(),
  newPasswordConfirm: z.string(),
}).refine((data) => data.newPassword === data.newPasswordConfirm, {
  message: "Please make sure to confirm the new password correctly",
  path: ["newPasswordConfirm"],
});

export const EmailSchema = z.object({email: z.string().email({ message: 'Please enter a valid email.' })});

export const ResetPasswordSchema = z.object({
  newPassword: z.string(),
  newPasswordConfirm: z.string(),
}).refine((data) => data.newPassword === data.newPasswordConfirm, {
  message: "Please make sure to confirm the new password correctly",
  path: ["newPasswordConfirm"],
});