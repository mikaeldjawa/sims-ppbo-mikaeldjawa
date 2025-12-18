import { baseApi } from "../../api";

export const { useProfileQuery } = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    profile: builder.query({
      query: () => "/profile",
      providesTags: ["Profile"],
    }),
  }),
});
