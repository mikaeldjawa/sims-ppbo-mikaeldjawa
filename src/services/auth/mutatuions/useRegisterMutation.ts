import { baseApi } from "@/services/api";
import type { RegisterDTO, Response } from "../types";

export const { useRegisterMutation } = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<Response<null>, RegisterDTO>({
      query: (payload: RegisterDTO) => ({
        url: "/registration",
        method: "POST",
        body: {
          email: payload.email,
          first_name: payload.firstName,
          last_name: payload.lastName,
          password: payload.password,
        },
      }),
    }),
  }),
});
