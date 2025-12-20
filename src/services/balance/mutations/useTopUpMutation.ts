import { baseApi } from "@/services/api";
import type { Balance, TopUpDTO } from "../types";
import type { Response } from "@/services/types";

export const { useTopUpMutation } = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    topUp: builder.mutation<Response<Balance>, TopUpDTO>({
      query: (payload: TopUpDTO) => ({
        url: "/topup",
        method: "POST",
        body: {
          top_up_amount: payload.topUpAmount,
        },
      }),
      invalidatesTags: ["Balance", "Transaction"],
    }),
  }),
});
