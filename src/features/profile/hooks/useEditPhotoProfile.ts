import { useRef } from "react";
import { toast } from "sonner";
import { useUpdateProfileImageMutation } from "@/services/profile/mutations/useUpdateProfileImageMutation";
import { useProfileQuery } from "@/services/profile";
import { getInitials } from "@/lib/utils";

export default function useEditPhotoProfile() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data: profile } = useProfileQuery(null);

  const initials = getInitials(
    profile?.data?.first_name,
    profile?.data?.last_name
  );

  const [updateImage, { isLoading }] = useUpdateProfileImageMutation();
  const cleanProfileImage = profile?.data?.profile_image?.includes("null")
    ? undefined
    : profile?.data?.profile_image;

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      return toast.error("Ukuran file terlalu besar (Maks 100KB - 1MB)", {
        style: {
          color: "#FB2C37",
        },
      });
    }

    const formData = new FormData();
    formData.append("file", file);

    updateImage(formData)
      .unwrap()
      .then(() => {
        toast.success("Foto profil berhasil diperbarui", {
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
  };

  return {
    fileInputRef,
    handleIconClick,
    handleFileChange,
    cleanProfileImage,
    isLoading,
    initials,
  };
}
