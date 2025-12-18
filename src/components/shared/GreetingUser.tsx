import photoProfile from '@/assets/photo-profile.png'

const GreetingUser = () => {
  return (
    <div className='flex flex-col gap-4'>
      <img src={photoProfile} className='w-18' alt='Photo Profile' />
      <div>
        <p className='text-lg'>Selamat datang,</p>
        <h4 className='text-3xl font-semibold'>Kristanto Wibowo</h4>
      </div>
    </div>
  )
}

export default GreetingUser