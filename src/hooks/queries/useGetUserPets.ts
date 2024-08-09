import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

export const getUserPets = (id: string) => ({
  queryKey: ["get-user-pets", id],
  queryFn: () => apiService.getUserPets(id),
});

export const useGetUserPets = (id: string) => {
  return useQuery({ ...getUserPets(id) });
};
