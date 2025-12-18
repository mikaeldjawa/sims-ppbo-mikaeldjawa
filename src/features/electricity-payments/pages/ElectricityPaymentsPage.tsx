import BalanceCard from "@/components/shared/BalanceCard"
import GreetingUser from "@/components/shared/GreetingUser"
import ElectricityPaymentsForm from "../components/ElectricityPaymentsForm"

const ElectricityPaymentsPage = () => {
  return (
    <section className='max-w-7xl mx-auto space-y-8'>
      <div className='flex justify-between py-10'>
        <GreetingUser />
        <BalanceCard />
      </div>

      <div className='space-y-8'>
        <div className="space-y-2">
          <p className='text-lg'>Pembayaran</p>
          <div className="flex gap-2">
            <img className="w-8" src="./src/assets/services/Listrik.png" alt="" />
            <h6 className='text-lg font-semibold'>Listrik Prabayar</h6>
          </div>
        </div>

        {/* Form Top Up */}
        <ElectricityPaymentsForm />
      </div>
    </section>
  )
}

export default ElectricityPaymentsPage