import Logo from "@/assets/Logo.png"
import { Separator } from "../ui/separator"
import { Link, NavLink, Outlet } from "react-router"
import { ROUTES } from "@/utils/constants"
import { cn } from "@/lib/utils"
import { Fragment } from "react/jsx-runtime"

export const Navbar = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "text-sm md:text-base font-medium transition-colors hover:text-red-500 whitespace-nowrap",
      isActive ? "text-red-500 font-bold" : "text-gray-600"
    );

  return (
    <Fragment>
      <nav className="sticky top-0 z-50 bg-white">
        <div className="flex flex-row justify-between items-center py-5 md:py-8 px-4 sm:px-6 lg:px-8 xl:px-0 mx-auto max-w-7xl">
          <Link to={ROUTES.HOME} className="shrink-0">
            <div className="flex gap-2 items-center">
              <img src={Logo} className="w-5 md:w-6" alt="Logo SIMS PPOB" />
              <h6 className="font-bold text-sm md:text-lg tracking-tight">SIMS PPOB</h6>
            </div>
          </Link>

          <ul className="flex gap-4 sm:gap-6 md:gap-12 items-center">
            <li>
              <NavLink to={ROUTES.TOP_UP} className={navLinkClass}>
                Top Up
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.TRANSACTIONS} className={navLinkClass}>
                Transaction
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.ACCOUNT} className={navLinkClass}>
                Akun
              </NavLink>
            </li>
          </ul>
        </div>
        <Separator />
      </nav>

      <main className="w-full">
        <Outlet />
      </main>
    </Fragment>
  )
}