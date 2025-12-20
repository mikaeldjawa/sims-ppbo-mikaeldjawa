import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { logout } from "@/features/auth/authSlice";
import { ROUTES } from "@/utils/constants";

const baseUrl = import.meta.env.VITE_BASE_API_URL;

const rawBaseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions);
  const responseData = result.error?.data as any;

  if (responseData?.status === 108) {
    api.dispatch(logout());
    window.location.href = ROUTES.LOGIN;
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Profile", "Balance", "Services", "Banner", "Transaction"],
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
