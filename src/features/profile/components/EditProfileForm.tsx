import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { InputWithIcon } from "@/components/ui/InputWithIcon"
import { AtSign, Loader2, UserRound } from "lucide-react"
import { logout } from "@/features/auth/authSlice"
import useEditProfileForm from "../hooks/useEditProfileForm"
import { useAppDispatch } from "@/stores/hooks"

const EditProfileForm = () => {
  const { form, isLoading, isEditing, onSubmit, setIsEditing } = useEditProfileForm();
  const dispatch = useAppDispatch();


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <InputWithIcon
                  disabled
                  label="Email"
                  icon={AtSign}
                  isError={!!fieldState.error}
                  placeholder="masukkan email anda"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="firstName"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <InputWithIcon
                  disabled={!isEditing}
                  label="Nama Depan"
                  icon={UserRound}
                  isError={!!fieldState.error}
                  placeholder="nama depan"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <InputWithIcon
                  disabled={!isEditing}
                  label="Nama Belakang"
                  icon={UserRound}
                  isError={!!fieldState.error}
                  placeholder="nama belakang"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-4 pt-4">
          {!isEditing ? (
            <>
              <Button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsEditing(true);
                }}
                variant="outline"
                className="w-full h-12 border-red-500 text-red-500 hover:bg-red-50 font-semibold"
              >
                Edit Profil
              </Button>
              <Button
                type="button"
                onClick={() => dispatch(logout())}
                className="w-full h-12 bg-red-500 hover:bg-red-600 text-white font-semibold"
              >
                Logout
              </Button>
            </>
          ) :
            <Button
              disabled={isLoading}
              className="w-full h-12 bg-red-500 hover:bg-red-600 transition-all font-semibold"
              type="submit"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "Simpan"
              )}
            </Button>
          }
        </div>
      </form>
    </Form>
  )
}

export default EditProfileForm