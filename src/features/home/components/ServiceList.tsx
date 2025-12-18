const ServiceList = () => {
  return (
    <div className='flex justify-between'>
      {
        Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className='flex flex-col gap-2 items-center'>
            <img src="./src/assets/services/Game.png" alt="" className="" />
            <p className="text-sm">PBB</p>
          </div>
        ))
      }
    </div>
  )
}

export default ServiceList