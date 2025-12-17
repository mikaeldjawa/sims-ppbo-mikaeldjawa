import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/utils/constants"
import AuthInfo from "../components/AuthInfo"
import { Link } from "react-router"
import useLoginForm from "../hooks/useLoginForm"
import AuthLayout from "../components/AuthLayout"
import { AtSign, LockKeyhole } from "lucide-react"

const LoginPage = () => {
  const { form, onSubmit, isPending, error, data, isShow, setIsShow } = useLoginForm()

  return (
    <AuthLayout subtitle="Masuk atau buat akun untuk memulai">
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

      <p className="text-center">belum punya akun? registrasi <Link className="text-primary font-semibold" to={ROUTES.REGISTER}>di sini</Link></p>

      <AuthInfo
        isShow={isShow}
        isError={!!error}
        message={error ? error.message : data?.message}
        setShowError={setIsShow} />
    </AuthLayout>
  )
}
export default LoginPage