"use client"
import { apiService } from "@/services"
import { useMutation } from "@tanstack/react-query"

export const useDeleteObjective = () => {
    return useMutation(apiService.deleteObjective)
}