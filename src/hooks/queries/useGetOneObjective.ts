import { apiService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const getOneObjective = (id: string | null) => ({
    queryKey: ['get-one-objective', id],
    queryFn: () => apiService.getOneObjective(id),
})

export const useGetOneObjective = (id: string | null) => {
    return useQuery({
        ...getOneObjective(id)
    })
}