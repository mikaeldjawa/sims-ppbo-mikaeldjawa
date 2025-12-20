import { useForm } from "react-hook-form";
import { registerFormSchema, type RegisterFormSchema } from "../forms/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { ROUTES } from "@/utils/constants";
import { useRegisterMutation } from "@/services/auth";
import type { Response } from "@/services/types";

export default function useRegisterForm() {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const [register, { isLoading, error, data, isError, isSuccess }] =
    useRegisterMutation();
  const navigate = useNavigate();

  function onSubmit(values: RegisterFormSchema) {
    register(values)
      .unwrap()
      .then(() => {
        form.reset();
        navigate(ROUTES.LOGIN);
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
