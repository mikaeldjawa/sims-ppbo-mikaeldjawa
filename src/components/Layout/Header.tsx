import { Outlet } from "react-router"
import BalanceCard from "../shared/BalanceCard"
import GreetingUser from "../shared/GreetingUser"

const Header = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto pt-10 pb-16'>
        <div className='flex justify-between'>
          <GreetingUser />
          <BalanceCard />
        </div>
      </div>
      <Outlet />
    </>

  )
}

export default Header