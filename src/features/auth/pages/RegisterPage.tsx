import { Link } from "react-router"
import AuthInfo from "../components/AuthInfo"
import { ROUTES } from "@/utils/constants"
import useRegisterForm from "../hooks/useRegisterForm"
import AuthLayout from "../components/AuthLayout"
import RegisterForm from "../components/RegisterForm"

const RegisterPage = () => {
  const { form, onSubmit, isLoading, error, data, isError, isSuccess } = useRegisterForm()

  return (
    <AuthLayout subtitle="Lengkapi data untuk membuat akun">
      <div className="w-full max-w-sm mx-auto">
        <RegisterForm form={form} onSubmit={onSubmit} isPending={isLoading} />

        <div className="flex flex-row justify-center items-center gap-1 mt-6 text-sm md:text-base">
          <p className="text-gray-600">sudah punya akun? login</p>
          <Link
            className="text-red-500 hover:text-red-600 font-bold transition-colors"
            to={ROUTES.LOGIN}
          >
            di sini
          </Link>
        </div>
      </div>

      <div className="mt-4 w-full">
        <AuthInfo
          isError={isError}
          isShow={isSuccess || isError}
          message={error ? (error as any).data?.message : data?.message}
        />
      </div>
    </AuthLayout>
  )
}

export default RegisterPage