import BalanceCard from "@/components/shared/BalanceCard"
import GreetingUser from "@/components/shared/GreetingUser"
import TransactionList from "../components/TransactionList"

const TransactionPage = () => {
  return (
    <section className='max-w-7xl mx-auto space-y-8 mb-20'>
      <div className='flex justify-between py-10'>
        <GreetingUser />
        <BalanceCard />
      </div>
      <TransactionList />
    </section>
  )
}

export default TransactionPage