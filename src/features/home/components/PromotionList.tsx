const PromotionList = () => {
  return (
    <div className='flex flex-col gap-6 mt-16'>
      <p>Temukan Promo</p>
      <ul className='flex gap-8 overflow-scroll'>
        {
          Array.from({ length: 5 }).map((_, index) => (
            <img key={index} src={`./src/assets/banner/Banner ${index + 1}.png`} alt="Banner 2" />
          ))
        }
      </ul>
    </div>
  )
}

export default PromotionList