"use client";
import { useMutation } from "@tanstack/react-query";
import { apiService } from "@/services";

export const useAddRevenues = () => {
  return useMutation(apiService.addRevenues);
};