import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const getRevenues = (id: string) => ({
  queryKey: ["get-revenues", id],
  queryFn: () => apiService.getRevenues(id),
});

export const useGetRevenues = (id: string) => {
  return useQuery({
    ...getRevenues(id),
  });
};
