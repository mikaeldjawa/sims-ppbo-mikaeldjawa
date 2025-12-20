import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { AtSign, LockKeyhole, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { LoginFormSchema } from '../forms/login'
import type { UseFormReturn } from 'react-hook-form'
import { InputWithIcon } from '@/components/ui/InputWithIcon'

interface LoginFormProps {
  form: UseFormReturn<LoginFormSchema>
  onSubmit: (values: LoginFormSchema) => void
  isPending: boolean
}

const LoginForm = ({ form, onSubmit, isPending }: LoginFormProps) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-md mx-auto"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <InputWithIcon
                    icon={AtSign}
                    isError={!!fieldState.error}
                    placeholder="masukkan email anda"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-medium text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <InputWithIcon
                    icon={LockKeyhole}
                    isError={!!fieldState.error}
                    placeholder="masukkan password anda"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-medium text-red-500" />
              </FormItem>
            )}
          />
        </div>
        <Button
          disabled={isPending}
          className="w-full h-12 bg-red-500 hover:bg-red-600 transition-colors"
          type="submit"
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Masuk"
          )}
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm