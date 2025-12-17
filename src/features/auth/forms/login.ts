import z from "zod";

export const loginFormSchema = z.object({
  email: z.email("Parameter email tidak sesuai format"),
  password: z
    .string()
    .min(1, "Password wajib diisi")
    .min(8, "Password minimal 8 karakter"),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
