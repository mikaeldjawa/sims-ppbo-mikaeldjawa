import BalanceCard from "../shared/BalanceCard"
import GreetingUser from "../shared/GreetingUser"
import { Navbar } from "../shared/Navbar"

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-10 pb-16'>
        <div className='flex justify-between'>
          <GreetingUser />
          <BalanceCard />
        </div>
      </div>
    </div>
  )
}

export default Header