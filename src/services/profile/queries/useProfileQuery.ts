import type { Response } from "@/services/types";
import { baseApi } from "../../api";
import type { Profile } from "../types";

export const { useProfileQuery } = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query<Response<Profile>, null>({
      query: () => "/profile",
      providesTags: ["Profile"],
    }),
  }),
});
