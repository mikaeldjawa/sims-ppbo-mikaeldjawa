import { Pencil, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useEditPhotoProfile from "../hooks/useEditPhotoProfile";

const EditPhotoProfile = () => {
  const { cleanProfileImage, handleIconClick, handleFileChange, isLoading, fileInputRef, initials } = useEditPhotoProfile();

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <Avatar className="w-32 h-32 border-2 border-gray-200">
          <AvatarImage
            src={cleanProfileImage}
            alt="Foto Profil"
            className="object-cover"
          />
          <AvatarFallback className="bg-red-50 text-red-500 font-bold text-3xl">
            {initials}
          </AvatarFallback>
        </Avatar>

        <button
          onClick={handleIconClick}
          disabled={isLoading}
          type="button"
          className={cn(
            "absolute bottom-0 right-1 p-2 bg-white border border-gray-200 rounded-full shadow-md",
            "hover:bg-gray-50 transition-all cursor-pointer text-gray-600 disabled:cursor-not-allowed"
          )}
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin text-primary" />
          ) : (
            <Pencil className="w-4 h-4" />
          )}
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/png, image/jpeg"
          className="hidden"
        />
      </div>
    </div>
  );
};

export default EditPhotoProfile;