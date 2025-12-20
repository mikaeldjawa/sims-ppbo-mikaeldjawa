import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { AtSign, LockKeyhole, UserRound, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { UseFormReturn } from 'react-hook-form'
import type { RegisterFormSchema } from '../forms/register'
import { InputWithIcon } from '@/components/ui/InputWithIcon'

interface RegisterFormProps {
  form: UseFormReturn<RegisterFormSchema>
  onSubmit: (values: RegisterFormSchema) => void
  isPending: boolean
}

const RegisterForm = ({ form, onSubmit, isPending }: RegisterFormProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
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
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="firstName"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <InputWithIcon
                  icon={UserRound}
                  isError={!!fieldState.error}
                  placeholder="nama depan"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <InputWithIcon
                  icon={UserRound}
                  isError={!!fieldState.error}
                  placeholder="nama belakang"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
                  placeholder="buat password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <InputWithIcon
                  icon={LockKeyhole}
                  isError={!!fieldState.error}
                  placeholder="konfirmasi password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={isPending}
          className="w-full h-12 mt-4 bg-red-500 hover:bg-red-600 transition-all font-semibold"
          type="submit"
        >
          {isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            "Registrasi"
          )}
        </Button>
      </form>
    </Form>
  )
}

export default RegisterForm