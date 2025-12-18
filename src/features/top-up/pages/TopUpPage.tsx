import BalanceCard from '@/components/shared/BalanceCard'
import GreetingUser from '@/components/shared/GreetingUser'
import TopUpForm from '../components/TopUpForm'

const TopUpPage = () => {
  return (
    <section className='max-w-7xl mx-auto space-y-8'>
      <div className='flex justify-between py-10'>
        <GreetingUser />
        <BalanceCard />
      </div>
      <div className='space-y-8'>
        <div>
          <p className='text-lg'>Silahkan masukkan</p>
          <h4 className='text-3xl font-semibold'>Nominal Top Up</h4>
        </div>

        {/* Form Top Up */}
        <TopUpForm />
      </div>

    </section>
  )
}

export default TopUpPage