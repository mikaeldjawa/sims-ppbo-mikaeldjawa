import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  servicePaymentFormSchema,
  type ServicePaymentFormSchema,
} from "../forms/servicePayment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServiceTransactionMutation } from "@/services/transaction";
import type { Service } from "@/services/services";

interface useServicePaymentFormProps {
  service?: Service;
}

export default function useServicePaymentForm({
  service,
}: useServicePaymentFormProps) {
  const form = useForm<ServicePaymentFormSchema>({
    resolver: zodResolver(servicePaymentFormSchema),
    defaultValues: {
      serviceCode: service?.service_code,
    },
  });

  const [serviceTransaction, { isLoading, isError, error, isSuccess, data }] =
    useServiceTransactionMutation();

  useEffect(() => {
    if (service?.service_tariff) {
      form.setValue("serviceCode", service.service_code);
    }
  }, [service, form]);

  function onSubmit(values: ServicePaymentFormSchema) {
    serviceTransaction(values).unwrap();
  }

  return {
    form,
    onSubmit,
    isLoading,
    isError,
    error,
    isSuccess,
    data,
  };
}
