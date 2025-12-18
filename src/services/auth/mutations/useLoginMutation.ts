import { baseApi } from "@/services/api";
import type { LoginDTO, Response } from "../types";

export const { useLoginMutation } = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Response<{ token: string }>, LoginDTO>({
      query: (payload: LoginDTO) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});
