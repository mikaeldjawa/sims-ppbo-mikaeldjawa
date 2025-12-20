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
      <div className="w-full max-w-md mx-auto">
        <LoginForm form={form} onSubmit={onSubmit} isPending={isLoading} />

        <div className="flex flex-row justify-center items-center gap-1 mt-6 text-sm md:text-base">
          <p className="text-gray-600">belum punya akun? registrasi</p>
          <Link
            className="text-red-500 hover:text-red-600 font-bold transition-colors"
            to={ROUTES.REGISTER}
          >
            di sini
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <AuthInfo
          isShow={isSuccess || isError}
          isError={isError}
          message={error ? (error as any)?.data?.message : data?.message}
        />
      </div>
    </AuthLayout>
  )
}

export default LoginPage