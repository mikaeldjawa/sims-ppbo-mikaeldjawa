import type { Response } from "@/services/types";
import { baseApi } from "../../api";
import type { TransactionHistory } from "../types";

export const { useTransactionHistoryQuery } = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    transactionHistory: builder.query<
      Response<TransactionHistory>,
      {
        offset: number;
        limit: number;
      }
    >({
      query: ({ offset, limit }) =>
        `/transaction/history?offset=${offset}&limit=${limit}`,
      providesTags: ["Transaction"],
    }),
  }),
});
