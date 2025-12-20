import { baseApi } from "@/services/api";
import type { Response } from "@/services/types";
import type { Profile, UpdateProfileDTO } from "../types";

export const { useUpdateProfileMutation } = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation<Response<Profile>, UpdateProfileDTO>({
      query: (payload: UpdateProfileDTO) => ({
        url: "/profile/update",
        method: "PUT",
        body: {
          first_name: payload.firstName,
          last_name: payload.lastName,
        },
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});
