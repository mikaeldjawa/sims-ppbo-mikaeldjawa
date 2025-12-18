import { createBrowserRouter } from "react-router"

import RegisterPage from "./features/auth/pages/RegisterPage"
import LoginPage from "./features/auth/pages/LoginPage"
import { ROUTES } from "./utils/constants"
import HomePage from "./features/home/pages/HomePage"
import { Navbar } from "./components/shared/Navbar"
import TopUpPage from "./features/top-up/pages/TopUpPage"

const router = createBrowserRouter(
  [{
    path: "/",
    element:
      <>
        <Navbar />
        <HomePage />
      </>
  },
  {
    path: "/top-up",
    element:
      <>
        <Navbar />
        <TopUpPage />
      </>
  }, {
    path: ROUTES.REGISTER,
    element: <RegisterPage />
  }, {
    path: ROUTES.LOGIN,
    element: <LoginPage />
  },
  ]
)

export default router