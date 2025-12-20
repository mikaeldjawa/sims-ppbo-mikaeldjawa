import { useForm } from "react-hook-form";
import { loginFormSchema, type LoginFormSchema } from "../forms/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { ROUTES } from "@/utils/constants";
import { useLocation, useNavigate } from "react-router";
import { setCredentials } from "../authSlice";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/services/auth";
import type { Response } from "@/services/types";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || ROUTES.HOME;

  function onSubmit(values: LoginFormSchema) {
    login(values)
      .unwrap()
      .then((response) => {
        const token = response.data?.token;
        if (token) {
          dispatch(setCredentials(token));
          navigate(from, { replace: true });
          form.reset();
        }
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
