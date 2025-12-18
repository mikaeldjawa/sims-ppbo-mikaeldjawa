import { createBrowserRouter } from "react-router"
import RegisterPage from "./features/auth/pages/RegisterPage"
import LoginPage from "./features/auth/pages/LoginPage"
import { ROUTES } from "./utils/constants"
import HomePage from "./features/home/pages/HomePage"
import { Navbar } from "./components/shared/Navbar"
import TopUpPage from "./features/top-up/pages/TopUpPage"
import ElectricityPaymentsPage from "./features/electricity-payments/pages/ElectricityPaymentsPage"

const router = createBrowserRouter(
  [{
    path: ROUTES.HOME,
    element:
      <>
        <Navbar />
        <HomePage />
      </>
  },
  {
    path: ROUTES.TOP_UP,
    element:
      <>
        <Navbar />
        <TopUpPage />
      </>
  },
  {
    path: ROUTES.ELECTRICITY_PAYMENTS,
    element:
      <>
        <Navbar />
        <ElectricityPaymentsPage />
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