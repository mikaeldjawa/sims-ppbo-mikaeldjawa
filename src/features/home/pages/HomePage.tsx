import BalanceCard from '@/components/shared/BalanceCard'
import GreetingUser from '@/components/shared/GreetingUser'
import ServiceList from '../components/ServiceList'
import PromotionList from '../components/PromotionList'

const HomePage = () => {
  return (
    <section className='max-w-7xl mx-auto space-y-8'>
      <div className='flex justify-between py-10'>
        <GreetingUser />
        <BalanceCard />
      </div>
      <ServiceList />
      <PromotionList />
    </section>
  )
}

export default HomePage