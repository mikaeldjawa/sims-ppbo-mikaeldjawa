import z from "zod";

export const topUpFormSchema = z.object({
  topUpAmount: z
    .number("Masukkan angka yang valid")
    .min(10000, "Minimal Top Up adalah Rp10.000")
    .max(1000000, "Maksimal Top Up adalah Rp1.000.000"),
});

export type TopUpFormSchema = z.infer<typeof topUpFormSchema>;
