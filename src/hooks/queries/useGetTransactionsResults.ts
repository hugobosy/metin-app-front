import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

export const getTransactionsResults = (
  id?: string,
  by?: "day" | "month" | "year",
) => ({
  queryKey: ["get-transactions-results", id],
  queryFn: () => apiService.getTransactionsResults(id, by),
});

export const useGetTransactionsResults = (
  id?: string,
  by?: "day" | "month" | "year",
) => {
  return useQuery({ ...getTransactionsResults(id, by) });
};
