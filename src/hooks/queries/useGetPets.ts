import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

export const getPets = (id: string) => ({
  queryKey: ["get-pets", id],
  queryFn: () => apiService.getPets(id),
});

export const useGetPets = (id: string) => {
  return useQuery({ ...getPets(id) });
};
