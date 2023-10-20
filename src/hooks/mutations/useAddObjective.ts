import { apiService } from "@/services"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useAddObjectiveMutation = () => {
    return useMutation(apiService.addObjective)
}