import { useProfileQuery } from '@/services/profile'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getInitials } from '@/lib/utils'

const GreetingUser = () => {
  const { data: profile } = useProfileQuery(null)

  const profileImage = profile?.data?.profile_image?.includes('null')
    ? undefined
    : profile?.data?.profile_image

  return (
    <div className='flex flex-col gap-4'>
      <Avatar className="w-18 h-18 border border-gray-100">
        <AvatarImage
          src={profileImage}
          alt={`${profile?.data?.first_name} profile`}
          className="object-cover"
        />
        <AvatarFallback className="bg-red-50 text-red-500 font-bold">
          {getInitials(`${profile?.data?.first_name} ${profile?.data?.last_name}`)}
        </AvatarFallback>
      </Avatar>

      <div>
        <p className='text-lg text-gray-600 font-medium'>Selamat datang,</p>
        <h4 className='text-3xl font-bold'>
          {profile?.data?.first_name} {profile?.data?.last_name}
        </h4>
      </div>
    </div>
  )
}

export default GreetingUser