import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

export const getTransactions = (id: string) => ({
  queryKey: ["get-transactions", id],
  queryFn: () => apiService.getTransactions(id),
});

export const useGetTransactions = (id: string) => {
  return useQuery({ ...getTransactions(id) });
};
