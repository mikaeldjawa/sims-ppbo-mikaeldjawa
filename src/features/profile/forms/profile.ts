import { z } from "zod";

export const profileFormSchema = z.object({
  email: z.email("Parameter email tidak sesuai format"),
  firstName: z.string().min(1, "Nama depan wajib diisi"),
  lastName: z.string().min(1, "Nama belakang wajib diisi"),
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;
