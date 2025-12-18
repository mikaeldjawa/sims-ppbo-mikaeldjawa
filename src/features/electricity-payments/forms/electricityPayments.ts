import z from "zod";

export const electricityPaymentsFormSchema = z.object({
  totalAmount: z.number().positive(),
});

export type ElectricityPaymentsFormSchema = z.infer<
  typeof electricityPaymentsFormSchema
>;
