import { baseApi } from "@/services/api";
import type { Response } from "@/services/types";
import type { Profile, UpdateProfileImageDTO } from "../types";

export const { useUpdateProfileImageMutation } = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfileImage: builder.mutation<
      Response<Profile>,
      UpdateProfileImageDTO
    >({
      query: (formData: UpdateProfileImageDTO) => ({
        url: "/profile/image",
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});
