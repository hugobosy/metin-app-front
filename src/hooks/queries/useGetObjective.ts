import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { ObjectiveValues } from "@/types/objectiveValues";

export const getObjective = (id: string) => ({
  queryKey: ["get-objective", id],
  queryFn: () => apiService.getObjective(id),
});

export const useGetObjective = (id: string) => {
  return useQuery({
    ...getObjective(id),
  });
};
