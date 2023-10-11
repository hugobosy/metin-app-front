"use client";

import { useQuery } from "@tanstack/react-query";
import { apiService } from "@/services";

export const useActivateQuery = (code: string) => {
  return useQuery({
    queryKey: ["activate-user"],
    queryFn: () => apiService.activate(code),
    retry: false,
  });
};
