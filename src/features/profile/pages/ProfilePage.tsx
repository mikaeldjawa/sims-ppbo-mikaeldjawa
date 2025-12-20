import { useProfileQuery } from "@/services/profile"
import EditPhotoProfile from "../components/EditPhotoProfile"
import EditProfileForm from "../components/EditProfileForm"
import { Toaster } from "@/components/ui/sonner"

const ProfilePage = () => {
  const { data: profile } = useProfileQuery(null)

  return (
    <section className='max-w-3xl mx-auto space-y-8 mt-10 px-6 xl:px-0'>
      <EditPhotoProfile />
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800">{profile?.data?.first_name} {profile?.data?.last_name}</h3>
      </div>
      <EditProfileForm />
      <Toaster />
    </section>
  )
}

export default ProfilePage