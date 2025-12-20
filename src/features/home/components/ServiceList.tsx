import { useServicesQuery } from "@/services/services"
import { ROUTES } from "@/utils/constants"
import { Link } from "react-router"

const ServiceList = () => {
  const { data } = useServicesQuery(null)

  return (
    <div className='grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-y-8 gap-x-4 justify-items-center mt-8'>
      {data?.data?.map((service, index) => (
        <Link
          to={`${ROUTES.SERVICE}/${service.service_code.toLowerCase()}`}
          key={index}
          className='flex flex-col gap-2 items-center w-full group transition-transform duration-300 hover:scale-110'
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
            <img
              src={service.service_icon}
              alt={service.service_name}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-[10px] sm:text-xs text-center leading-tight wrap-break-word max-w-20">
            {service.service_name}
          </p>
        </Link>
      ))}
    </div>
  )
}

export default ServiceList