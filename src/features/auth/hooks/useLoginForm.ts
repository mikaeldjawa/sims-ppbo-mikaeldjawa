import { useForm } from "react-hook-form";
import { loginFormSchema, type LoginFormSchema } from "../forms/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/services/auth/mutatuions/useLoginMutation";
import { LS_TOKEN, ROUTES } from "@/utils/constants";
import { useNavigate } from "react-router";
import type { Response } from "@/services/auth/types";

export default function useLoginForm() {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [login, { isLoading, data, isError, error, isSuccess }] =
    useLoginMutation();
  const navigate = useNavigate();

  function onSubmit(values: LoginFormSchema) {
    login(values)
      .unwrap()
      .then((response) => {
        localStorage.setItem(LS_TOKEN, response.data?.token!);
        navigate(ROUTES.HOME);
      });
  }

  return {
    form,
    onSubmit,
    isLoading,
    isError,
    isSuccess,
    error: error as { data?: Response },
    data,
  };
}
