import { useForm } from "react-hook-form"
import { topUpFormSchema, type TopUpFormSchema } from "../forms/topup"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { formatRupiah } from "@/utils/formatCurrency"

const TopUpForm = () => {

  const form = useForm<TopUpFormSchema>({
    resolver: zodResolver(topUpFormSchema),
    defaultValues: {
      topUpAmmount: 0
    }
  })

  function onSubmit(values: TopUpFormSchema) {
    console.log(values)
  }

  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-10 items-start" >
        <div className="space-y-6 w-full">
          <FormField
            control={form.control}
            name="topUpAmmount"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="number" placeholder="masukkan nominal top up" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Top Up</Button>
        </div>

        <div className="grid grid-cols-3 w-full max-w-sm space-y-4 gap-4">
          {
            ["10000", "20000", "30000", "40000", "50000", "60000"].map((item, index) => (
              <Button type="button" key={index} className="  w-full place-items-center">
                {formatRupiah(parseInt(item))}
              </Button>
            ))
          }

        </div>
      </form>

    </Form >

  )
}

export default TopUpForm