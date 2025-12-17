import { useForm } from "react-hook-form";
import { registerFormSchema, type RegisterFormSchema } from "../forms/register";
import { zodResolver } from "@hookform/resolvers/zod";
import useRegister from "@/services/auth/mutatuions/useRegister";
import useShow from "@/hooks/useShow";
import { useNavigate } from "react-router";
import { ROUTES } from "@/utils/constants";

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

  const { mutate, error, data, isPending } = useRegister();
  const { isShow, setIsShow } = useShow();
  const navigate = useNavigate();

  function onSubmit(values: RegisterFormSchema) {
    mutate(values, {
      onSuccess: () => {
        form.reset();
        setIsShow(true);
        navigate(ROUTES.LOGIN);
      },
      onError: () => {
        setIsShow(true);
      },
    });
  }

  return {
    form,
    onSubmit,
    error,
    data,
    isPending,
    isShow,
    setIsShow,
  };
}
