import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const getExpenses = (id: string) => ({
  queryKey: ["get-expenses", id],
  queryFn: () => apiService.getExpenses(id),
});

export const useGetExpenses = (id: string) => {
  return useQuery({
    ...getExpenses(id),
  });
};
