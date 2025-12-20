import type { Response } from "@/services/types";
import { baseApi } from "../../api";
import type { Service } from "../types";

export const { useServicesQuery } = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    services: builder.query<Response<Service[]>, null>({
      query: () => "/services",
      providesTags: ["Services"],
    }),
  }),
});
