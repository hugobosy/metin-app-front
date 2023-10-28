import { useMutation } from "@tanstack/react-query";
import { apiService } from "@/services";

export const useConvertYangToWon = () => {
  return useMutation(apiService.convertYangToWon);
};
