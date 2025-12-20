import { useBannerQuery } from "@/services/banner/queries/useBannerQuery"

const PromotionList = () => {
  const { data } = useBannerQuery(null)

  return (
    <div className='flex flex-col gap-4 mt-10 md:mt-16'>
      <p className="font-semibold text-lg text-gray-800">Temukan promo menarik</p>

      <ul className='flex gap-4 md:gap-8 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory'>
        {data?.data?.map((banner, index) => (
          <li key={index} className="shrink-0 snap-start">
            <img
              src={banner.banner_image}
              alt={banner.banner_name}
              className="h-30 md:h-auto w-auto object-cover rounded-xl shadow-sm"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PromotionList