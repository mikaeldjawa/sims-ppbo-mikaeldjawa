import { ROUTES } from "@/utils/constants"
import AuthInfo from "../components/AuthInfo"
import { Link } from "react-router"
import useLoginForm from "../hooks/useLoginForm"
import AuthLayout from "../components/AuthLayout"
import LoginForm from "../components/LoginForm"

const LoginPage = () => {
  const { form, onSubmit, isPending, error, data, isShow, setIsShow } = useLoginForm()

  return (
    <AuthLayout subtitle="Masuk atau buat akun untuk memulai">
      <LoginForm form={form} onSubmit={onSubmit} isPending={isPending} />

      <div className="flex gap-1">
        <p className="text-center">belum punya akun? registrasi</p>
        <Link className="text-primary font-semibold" to={ROUTES.REGISTER}>di sini</Link>
      </div>

      <AuthInfo
        isShow={isShow}
        isError={!!error}
        message={error ? error.message : data?.message}
        setShowError={setIsShow} />
    </AuthLayout>
  )
}
export default LoginPage