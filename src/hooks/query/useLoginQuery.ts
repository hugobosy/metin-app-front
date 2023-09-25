import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

export const useLoginQuery = () => {
  return useQuery({
    queryKey: ["login-query"],
    queryFn: apiService.login,
  });
};
