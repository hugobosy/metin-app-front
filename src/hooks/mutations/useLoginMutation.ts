"use client";
import { useMutation } from "@tanstack/react-query";
import { apiService } from "@/services";
import { setAccessTokenCookie } from "@/utils/cookie";

export const useLoginMutation = () => {
  return useMutation(apiService.login, {
    onSuccess: (res) => {
      setAccessTokenCookie(res.access_token);
    },
  });
};
