import { Outlet } from "react-router"
import BalanceCard from "../shared/BalanceCard"
import GreetingUser from "../shared/GreetingUser"

const Header = () => {
  return (
    <>
      <header className="w-full">
        <div className="max-w-7xl mx-auto pt-8 pb-12 md:pt-10 md:pb-16 px-4 sm:px-6 lg:px-8 xl:px-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-6">
            <div className="w-full md:w-1/3 lg:w-auto">
              <GreetingUser />
            </div>
            <div className="w-full md:w-[60%] lg:w-[55%]">
              <BalanceCard />
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <Outlet />
      </main>
    </>
  )
}

export default Header