import { apiService } from "@/services"
import { useMutation } from "@tanstack/react-query"

export const useSetCompleteObjective = () => {
    return useMutation(apiService.setCompleteObjective)
}