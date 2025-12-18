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
      <RegisterForm form={form} onSubmit={onSubmit} isPending={isLoading} />

      <div className="flex gap-1">
        <p className="text-center">sudah punya akun? login</p>
        <Link className="text-primary font-semibold" to={ROUTES.LOGIN}>di sini</Link>
      </div>

      <AuthInfo
        isError={isError}
        isShow={isSuccess || isError}
        message={error ? error.data?.message : data?.message}
      />
    </AuthLayout>
  )
}

export default RegisterPage