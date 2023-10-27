import { useMutation } from "@tanstack/react-query";
import { apiService } from "@/services";

export const useUpdateBalance = () => {
  return useMutation(apiService.updateBalance);
};
