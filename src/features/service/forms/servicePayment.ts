import z from "zod";

export const servicePaymentFormSchema = z.object({
  serviceCode: z.string(),
});

export type ServicePaymentFormSchema = z.infer<typeof servicePaymentFormSchema>;
