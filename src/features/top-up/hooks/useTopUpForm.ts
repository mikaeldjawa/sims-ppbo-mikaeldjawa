import { useForm } from "react-hook-form";
import { topUpFormSchema, type TopUpFormSchema } from "../forms/topup";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTopUpMutation } from "@/services/balance";
import { useState } from "react";

export default function useTopUpForm() {
  const form = useForm<TopUpFormSchema>({
    resolver: zodResolver(topUpFormSchema),
    mode: "onChange",
    defaultValues: {
      topUpAmount: "" as unknown as number,
    },
  });

  const [lastAmount, setLastAmount] = useState(0);
  const [topUp, { isLoading, isError, error, isSuccess, data }] =
    useTopUpMutation();

  const currentAmount = form.watch("topUpAmount");
  const isValid = currentAmount >= 10000;

  function onSubmit(values: TopUpFormSchema) {
    topUp(values)
      .unwrap()
      .then((response) => {
        form.reset();
        console.log("Top Up Berhasil", response);
      });

    setLastAmount(values.topUpAmount);
  }

  const handleQuickAmount = (amount: number) => {
    form.setValue("topUpAmount", amount, { shouldValidate: true });
  };

  const quickAmounts = [10000, 20000, 50000, 100000, 250000, 500000];

  return {
    form,
    onSubmit,
    isValid,
    handleQuickAmount,
    quickAmounts,
    isLoading,
    isError,
    error,
    isSuccess,
    data,
    currentAmount,
    lastAmount,
  };
}
