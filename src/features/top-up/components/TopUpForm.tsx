import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatRupiah } from "@/utils/formatCurrency";
import { Wallet } from "lucide-react";
import useTopUpForm from "../hooks/useTopUpForm";
import TransactionModal from "@/components/shared/TransactionModal";
import ResponseTransactionModal from "@/components/shared/ResponseTransactionModal";

const TopUpForm = () => {
  const { form, onSubmit, isLoading, quickAmounts, handleQuickAmount, isValid, currentAmount, isSuccess, lastAmount, isError } = useTopUpForm();

  return (
    <div className="space-y-8 py-4">
      <div className="space-y-1">
        <p className="text-lg text-gray-600">Silahkan masukkan</p>
        <h4 className="text-3xl font-bold">Nominal Top Up</h4>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

          <div className="lg:col-span-2 space-y-6">
            <FormField
              control={form.control}
              name="topUpAmount"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="number"
                        placeholder="masukkan nominal top up"
                        className="pl-10 h-12 text-lg"
                        {...field}
                        onChange={(e) => {
                          const val = e.target.value;
                          field.onChange(val === "" ? undefined : Number(val));
                        }}
                        onWheel={(e) => e.currentTarget.blur()}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <TransactionModal
              transactionType="TOPUP"
              isValid={isValid}
              isSuccess={isSuccess}
              isLoading={isLoading}
              amount={form.watch("topUpAmount")}
              onConfirm={form.handleSubmit(onSubmit)} />

            <ResponseTransactionModal
              isError={isError}
              isSuccess={isSuccess}
              amount={lastAmount}
            />
          </div>

          <div className="grid grid-cols-3 gap-6">
            {quickAmounts.map((amount) => (
              <Button
                type="button"
                key={amount}
                variant="outline"
                onClick={() => handleQuickAmount(amount)}
                className={`h-12 border-gray-200 hover:border-red-500 hover:text-red-500 transition-colors ${currentAmount === amount ? "border-red-500 text-red-500 bg-red-50" : ""
                  }`}
              >
                {formatRupiah(amount)}
              </Button>
            ))}
          </div>

        </form>
      </Form>
    </div>
  );
};

export default TopUpForm;