import Logo from "@/assets/Logo.png"
import { Separator } from "../ui/separator"
import { Link } from "react-router"
import { ROUTES } from "@/utils/constants"

export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between w-full items-center py-8 p-6 md:px-0 mx-auto max-w-7xl">
        <div className="flex gap-2 items-center justify-center">
          <img src={Logo} className="w-6" alt="Logo SIMS PPOB" />
          <h6 className="font-semibold">SIMS PPOB</h6>
        </div>
        <ul className="flex gap-8 items-center">
          <li>
            <Link to={ROUTES.TOP_UP}>
              Top Up
            </Link>
          </li>
          <li>
            <Link to={ROUTES.TRANSACTIONS}>
              Transaction
            </Link>
          </li>
          <li>
            <Link to={ROUTES.ACCOUNT}>
              Akun
            </Link>
          </li>
        </ul>
      </nav>
      <Separator />
    </>
  )
}
