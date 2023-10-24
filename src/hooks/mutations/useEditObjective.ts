"use client";
import { useMutation } from "@tanstack/react-query";
import { apiService } from "@/services";

export const useEditObjective = () => {
  return useMutation(apiService.editObjective);
};