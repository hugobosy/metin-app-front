import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

export const getBalance = (id: string) => ({
  queryKey: ["get-balance", id],
  queryFn: () => apiService.getBalance(id),
});

export const useGetBalance = (id: string) => {
  return useQuery({ ...getBalance(id) });
};
