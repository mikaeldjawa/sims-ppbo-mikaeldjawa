import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import AuthInfo from "../components/AuthInfo"
import { ROUTES } from "@/utils/constants"
import useRegisterForm from "../hooks/useRegisterForm"
import AuthLayout from "../components/AuthLayout"
import { AtSign, LockKeyhole, UserRound } from "lucide-react"

const RegisterPage = () => {
  const { form, onSubmit, isPending, error, data, isShow, setIsShow } = useRegisterForm()

  return (
    <AuthLayout subtitle="Lengkapi data untuk membuat akun">
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
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                    <Input className="pl-8" placeholder="nama depan" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                    <Input className="pl-8" placeholder="nama belakang" {...field} />
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
                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                    <Input type="password" className="pl-8" placeholder="buat password" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" />
                    <Input type="password" className="pl-8" placeholder="konfirmasi password" {...field} />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} className="w-full mt-6" type="submit">Registrasi</Button>
        </form>
      </Form>

      <p className="text-center">sudah punya akun? login <Link className="text-primary font-semibold" to={ROUTES.LOGIN}>di sini</Link></p>

      <AuthInfo
        isError={!!error}
        isShow={isShow}
        message={error ? error.message : data?.message}
        setShowError={setIsShow}
      />
    </AuthLayout>
  )
}

export default RegisterPage