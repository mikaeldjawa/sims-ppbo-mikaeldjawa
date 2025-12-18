import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "@/stores/hooks";
import { ROUTES } from "@/utils/constants";

const PublicRoute = () => {
  const { token } = useAppSelector((state) => state.auth);

  if (token) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;