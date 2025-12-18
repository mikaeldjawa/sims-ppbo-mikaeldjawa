import { ROUTES } from "@/utils/constants"
import AuthInfo from "../components/AuthInfo"
import { Link } from "react-router"
import useLoginForm from "../hooks/useLoginForm"
import AuthLayout from "../components/AuthLayout"
import LoginForm from "../components/LoginForm"

const LoginPage = () => {
  const { form, onSubmit, isLoading, isError, data, isSuccess, error } = useLoginForm()

  return (
    <AuthLayout subtitle="Masuk atau buat akun untuk memulai">
      <LoginForm form={form} onSubmit={onSubmit} isPending={isLoading} />

      <div className="flex gap-1">
        <p className="text-center">belum punya akun? registrasi</p>
        <Link className="text-primary font-semibold" to={ROUTES.REGISTER}>di sini</Link>
      </div>

      <AuthInfo
        isShow={isSuccess || isError}
        isError={isError}
        message={error ? error?.data?.message : data?.message} />
    </AuthLayout>
  )
}
export default LoginPage