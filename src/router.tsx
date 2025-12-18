import { createBrowserRouter } from "react-router"
import RegisterPage from "./features/auth/pages/RegisterPage"
import LoginPage from "./features/auth/pages/LoginPage"
import { ROUTES } from "./utils/constants"
import HomePage from "./features/home/pages/HomePage"
import TopUpPage from "./features/top-up/pages/TopUpPage"
import ElectricityPaymentsPage from "./features/electricity-payments/pages/ElectricityPaymentsPage"
import TransactionPage from "./features/transaction/pages/TransactionPage"
import Header from "./components/Layout/Header"
import { Navbar } from "./components/shared/Navbar"
import ProtectRoute from "./components/shared/ProtectRoute"
import PublicRoute from "./components/shared/PublicRoute"

const router = createBrowserRouter(
  [{
    element: <ProtectRoute />,
    children: [{
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
            path: ROUTES.ELECTRICITY_PAYMENTS,
            element: <ElectricityPaymentsPage />
          }, {
            path: ROUTES.TRANSACTIONS,
            element: <TransactionPage />
          }]
        }]
    }]
  }, {
    element: <PublicRoute />,
    children: [{
      path: ROUTES.LOGIN,
      element: <LoginPage />
    }, {
      path: ROUTES.REGISTER,
      element: <RegisterPage />
    }]
  }
  ]
)

export default router