import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

const getAuthQuery = (jwt: string) => ({
  queryKey: ["auth-query"],
  queryFn: () => apiService.checkAuth(jwt),
});
export const useAuthQuery = (jwt: string) => {
  return useQuery({
    ...getAuthQuery(jwt),
    retry: false,
  });
};
