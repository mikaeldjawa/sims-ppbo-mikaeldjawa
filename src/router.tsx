import { createBrowserRouter, Navigate } from "react-router"
import RegisterPage from "./features/auth/pages/RegisterPage"
import LoginPage from "./features/auth/pages/LoginPage"
import { ROUTES } from "./utils/constants"
import HomePage from "./features/home/pages/HomePage"
import TopUpPage from "./features/top-up/pages/TopUpPage"
import ServicePage from "./features/service/pages/ServicePage"
import TransactionPage from "./features/transaction/pages/TransactionPage"
import Header from "./components/layout/Header"
import { Navbar } from "./components/shared/Navbar"
import ProtectRoute from "./components/shared/ProtectRoute"
import PublicRoute from "./components/shared/PublicRoute"
import ProfilePage from "./features/profile/pages/ProfilePage"

const router = createBrowserRouter(
  [{
    element: <ProtectRoute />,
    children: [
      {
        element: <Navbar />,
        children: [
          {
            element: <Header />,
            children: [{
              path: ROUTES.HOME,
              element: <HomePage />
            }, {
              path: ROUTES.TOP_UP,
              element: <TopUpPage />
            }, {
              path: `${ROUTES.SERVICE}/:serviceCode`,
              element: <ServicePage />
            }, {
              path: ROUTES.TRANSACTIONS,
              element: <TransactionPage />
            }]
          }, {
            path: ROUTES.ACCOUNT,
            element: <ProfilePage />
          }]
      },]
  }, {
    element: <PublicRoute />,
    children: [{
      path: ROUTES.LOGIN,
      element: <LoginPage />
    }, {
      path: ROUTES.REGISTER,
      element: <RegisterPage />
    }]
  }, {
    path: "*",
    element: <Navigate to={ROUTES.HOME} replace />
  }
  ]
)

export default router