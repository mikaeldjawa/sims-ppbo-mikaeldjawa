import type { Response } from "@/services/types";
import { baseApi } from "../../api";
import type { Banner } from "../types";

export const { useBannerQuery } = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    banner: builder.query<Response<Banner[]>, null>({
      query: () => "/banner",
      providesTags: ["Banner"],
    }),
  }),
});
