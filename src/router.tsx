import { createBrowserRouter } from "react-router"
import App from "./App"
import RegisterPage from "./features/auth/pages/RegisterPage"
import LoginPage from "./features/auth/pages/LoginPage"
import { ROUTES } from "./utils/constants"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    }, {
      path: ROUTES.REGISTER,
      element: <RegisterPage />
    }, {
      path: ROUTES.LOGIN,
      element: <LoginPage />
    }
  ]
)

export default router