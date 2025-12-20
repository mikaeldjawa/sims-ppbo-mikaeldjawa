import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { profileFormSchema, type ProfileFormSchema } from "../forms/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProfileQuery, useUpdateProfileMutation } from "@/services/profile";

export default function useEditProfileForm() {
  const [isEditing, setIsEditing] = useState(false);
  const { data: profile } = useProfileQuery(null);

  const form = useForm<ProfileFormSchema>({
    resolver: zodResolver(profileFormSchema),
    values: {
      email: profile?.data?.email || "",
      firstName: profile?.data?.first_name || "",
      lastName: profile?.data?.last_name || "",
    },
  });

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  function onSubmit(values: ProfileFormSchema) {
    updateProfile(values)
      .unwrap()
      .then(() => {
        setIsEditing(false);
        toast.success("Profil berhasil diperbarui", {
          style: {
            color: "#00BD7D",
          },
        });
      })
      .catch(() => {
        toast.error("Gagal mengunggah foto", {
          style: {
            color: "#FB2C37",
          },
        });
      });
  }

  return {
    form,
    onSubmit,
    isLoading,
    isEditing,
    setIsEditing,
  };
}
