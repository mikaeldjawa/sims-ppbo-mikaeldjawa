import { useParams } from "react-router"
import { useServicesQuery } from "@/services/services"
import SeviceForm from "../components/ServicePaymentForm"

const ServicePage = () => {
  const { serviceCode } = useParams<{ serviceCode: string }>()
  const { data } = useServicesQuery(null)

  const currentService = data?.data?.find((service) => service.service_code.toLocaleLowerCase() === serviceCode)

  return (
    <section className='max-w-7xl mx-auto space-y-8'>
      <SeviceForm service={currentService} />
    </section>
  )
}

export default ServicePage