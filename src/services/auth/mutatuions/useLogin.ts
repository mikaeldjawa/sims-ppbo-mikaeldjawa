import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../api";

export default function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
}
