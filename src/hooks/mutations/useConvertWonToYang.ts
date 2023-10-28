import { useMutation } from "@tanstack/react-query";
import { apiService } from "@/services";

export const useConvertWonToYang = () => {
  return useMutation(apiService.convertWonToYang);
};
