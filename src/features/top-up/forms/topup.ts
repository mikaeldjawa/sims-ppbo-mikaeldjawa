import z from "zod";

export const topUpFormSchema = z.object({
  topUpAmmount: z.number().positive(),
});

export type TopUpFormSchema = z.infer<typeof topUpFormSchema>;
