import { createBrowserRouter } from "react-router"
import RegisterPage from "./features/auth/pages/RegisterPage"
import LoginPage from "./features/auth/pages/LoginPage"
import { ROUTES } from "./utils/constants"
import HomePage from "./features/home/pages/HomePage"
import TopUpPage from "./features/top-up/pages/TopUpPage"
import ElectricityPaymentsPage from "./features/electricity-payments/pages/ElectricityPaymentsPage"
import TransactionPage from "./features/transaction/pages/TransactionPage"
import Header from "./components/Layout/Header"

const router = createBrowserRouter(
  [{
    path: ROUTES.HOME,
    element:
      <>
        <Header />
        <HomePage />
      </>
  },
  {
    path: ROUTES.TOP_UP,
    element:
      <>
        <Header />
        <TopUpPage />
      </>
  },
  {
    path: ROUTES.ELECTRICITY_PAYMENTS,
    element:
      <>
        <Header />
        <ElectricityPaymentsPage />
      </>
  },
  {
    path: ROUTES.TRANSACTIONS,
    element:
      <>
        <Header />
        <TransactionPage />
      </>
  },
  {
    path: ROUTES.REGISTER,
    element: <RegisterPage />
  }, {
    path: ROUTES.LOGIN,
    element: <LoginPage />
  },
  ]
)

export default router