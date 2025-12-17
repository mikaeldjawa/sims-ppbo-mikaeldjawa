import { apiResolver } from "@/utils/api";
import type { LoginDTO, RegisterDTO, Response } from "./types";
import axios from "@/lib/axios";

export function register(payload: RegisterDTO) {
  return apiResolver<Response<null>>(() =>
    axios.post("/registration", {
      email: payload.email,
      first_name: payload.firstName,
      last_name: payload.lastName,
      password: payload.password,
    })
  );
}

export function login(payload: LoginDTO) {
  type token = {
    token: string;
  };
  return apiResolver<Response<token>>(() => axios.post("/login", payload));
}
