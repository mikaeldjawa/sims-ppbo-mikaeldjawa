import { useForm } from "react-hook-form";
import { loginFormSchema, type LoginFormSchema } from "../forms/login";
import { zodResolver } from "@hookform/resolvers/zod";
import useLogin from "@/services/auth/mutatuions/useLogin";
import useShow from "@/hooks/useShow";
import { LS_TOKEN, ROUTES } from "@/utils/constants";
import { useNavigate } from "react-router";

export default function useLoginForm() {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, isPending, error, data } = useLogin();
  const { isShow, setIsShow } = useShow();
  const navigate = useNavigate();

  function onSubmit(values: LoginFormSchema) {
    mutate(values, {
      onSuccess: (response) => {
        setIsShow(true);
        localStorage.setItem(LS_TOKEN, response.data?.token!);
        navigate(ROUTES.HOME);
      },
      onError: () => {
        setIsShow(true);
      },
    });
  }

  return {
    form,
    onSubmit,
    isPending,
    error,
    data,
    isShow,
    setIsShow,
  };
}
