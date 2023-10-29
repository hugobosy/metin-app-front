import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

export const getTransactions = (id: string) => {
  return useQuery({
    queryKey: ["get-transactions", id],
    queryFn: () => apiService.getTransactions(id),
  });
};

export const useGetTransactions = (id: string) => ({
  ...getTransactions(id),
});
