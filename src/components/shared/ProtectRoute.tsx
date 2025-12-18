import { useAppSelector } from "@/stores/hooks"
import { ROUTES } from "@/utils/constants"
import { Navigate, Outlet, useLocation } from "react-router"

const ProtectRoute = () => {
  const { token } = useAppSelector((state) => state.auth)
  const location = useLocation()

  if (!token) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />
  }

  return <Outlet />
}

export default ProtectRoute