"use client"
import { apiService } from "@/services"
import { useMutation } from "@tanstack/react-query"

export const useEditObjective = () => {
    return useMutation(apiService.editObjective)
}