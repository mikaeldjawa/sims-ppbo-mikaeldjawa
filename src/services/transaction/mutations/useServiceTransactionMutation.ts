import { baseApi } from "@/services/api";
import type { Response } from "@/services/types";
import type { ServiceTransactionDTO, Transaction } from "../types";

export const { useServiceTransactionMutation } = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    serviceTransaction: builder.mutation<
      Response<Transaction>,
      ServiceTransactionDTO
    >({
      query: (payload: ServiceTransactionDTO) => ({
        url: "/transaction",
        method: "POST",
        body: {
          service_code: payload.serviceCode,
        },
      }),
      invalidatesTags: ["Balance"],
    }),
  }),
});
