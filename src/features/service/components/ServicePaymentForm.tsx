
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { Service } from "@/services/services";
import { Banknote } from "lucide-react";
import useServicePaymentForm from "../hooks/useServicePaymentForm";
import TransactionModal from "@/components/shared/TransactionModal";
import ResponseTransactionModal from "@/components/shared/ResponseTransactionModal";

interface ServicePaymentFormProps {
  service?: Service;
}

const ServicePaymentForm = ({ service }: ServicePaymentFormProps) => {
  const { form, onSubmit, isLoading, isSuccess, isError } = useServicePaymentForm({ service });

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-lg">Pembayaran</p>
        <div className="flex gap-4 items-center">
          <img
            className="w-10 h-10 object-contain"
            src={service?.service_icon}
            alt={service?.service_name}
          />
          <h6 className="text-xl font-bold">{service?.service_name}</h6>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
          <FormField
            control={form.control}
            name="serviceCode"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Banknote className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      disabled
                      type="number"
                      placeholder={service?.service_tariff.toString() || "Nominal Pembayaran"}
                      className="pl-10 h-12 bg-gray-50 disabled:opacity-100 disabled:cursor-default font-semibold text-lg"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <TransactionModal
            transactionType="PAYMENT"
            isSuccess={isSuccess}
            isLoading={isLoading}
            serviceName={service?.service_name}
            amount={service?.service_tariff}
            onConfirm={form.handleSubmit(onSubmit)} />

          <ResponseTransactionModal
            isSuccess={isSuccess}
            isError={isError}
            amount={service?.service_tariff}
            serviceName={service?.service_name}
          />
        </form>
      </Form>
    </div>
  );
};

export default ServicePaymentForm;