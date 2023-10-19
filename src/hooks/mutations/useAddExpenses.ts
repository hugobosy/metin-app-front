"use client";
import { useMutation } from "@tanstack/react-query";
import { apiService } from "@/services";

export const useAddExpenses = () => {
  return useMutation(apiService.addExpenses);
};