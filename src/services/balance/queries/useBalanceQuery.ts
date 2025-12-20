import type { Response } from "@/services/types";
import { baseApi } from "../../api";
import type { Balance } from "../types";

export const { useBalanceQuery } = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    balance: builder.query<Response<Balance>, null>({
      query: () => "/balance",
      providesTags: ["Balance"],
    }),
  }),
});
