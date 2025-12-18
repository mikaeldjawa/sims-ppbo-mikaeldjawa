import ServiceList from '../components/ServiceList'
import PromotionList from '../components/PromotionList'

const HomePage = () => {
  return (
    <section className='max-w-7xl mx-auto space-y-8'>
      <ServiceList />
      <PromotionList />
    </section>
  )
}

export default HomePage