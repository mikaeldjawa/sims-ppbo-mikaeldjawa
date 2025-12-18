import { useForm } from "react-hook-form"
import { electricityPaymentsFormSchema, type ElectricityPaymentsFormSchema } from "../forms/electricityPayments"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const ElectricityPaymentsForm = () => {
  const form = useForm<ElectricityPaymentsFormSchema>({
    resolver: zodResolver(electricityPaymentsFormSchema),
    defaultValues: {
      totalAmount: 0
    }
  })

  function onSubmit(values: ElectricityPaymentsFormSchema) {
    console.log(values)
  }

  return (
    <div className='space-y-8'>
      <div className="space-y-2">
        <p className='text-lg'>Pembayaran</p>
        <div className="flex gap-2">
          <img className="w-8" src="./src/assets/services/Listrik.png" alt="" />
          <h6 className='text-lg font-semibold'>Listrik Prabayar</h6>
        </div>
      </div>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full" >
          <FormField
            control={form.control}
            name="totalAmount"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input disabled type="number" placeholder="masukkan nominal top up" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Bayar</Button>
        </form>
      </Form >
    </div>

  )
}

export default ElectricityPaymentsForm