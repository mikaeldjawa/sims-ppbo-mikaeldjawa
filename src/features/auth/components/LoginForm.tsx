import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { AtSign, LockKeyhole } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { LoginFormSchema } from '../forms/login'
import type { UseFormReturn } from 'react-hook-form'

interface LoginFormProps {
  form: UseFormReturn<LoginFormSchema, any, LoginFormSchema>
  onSubmit: (values: LoginFormSchema) => void
  isPending: boolean
}

const LoginForm = ({ form, onSubmit, isPending }: LoginFormProps) => {

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                  <Input className="pl-8" placeholder="masukkan email anda" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <span className="relative">
                  <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                  <Input type="password" className="pl-8" placeholder="masukkan password anda" {...field} />
                </span>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isPending} className="w-full mt-6" type="submit">Masuk</Button>
      </form>
    </Form>
  )
}

export default LoginForm