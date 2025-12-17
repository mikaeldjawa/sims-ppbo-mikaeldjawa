import { z } from "zod";

export const registerFormSchema = z
  .object({
    email: z.email("Parameter email tidak sesuai format"),
    firstName: z.string().min(1, "Nama depan wajib diisi"),
    lastName: z.string().min(1, "Nama belakang wajib diisi"),
    password: z
      .string()
      .min(1, "Password wajib diisi")
      .min(8, "Password minimal 8 karakter"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Password tidak sama",
    path: ["passwordConfirm"],
  });

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
