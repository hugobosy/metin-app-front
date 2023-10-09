"use client";
import { useMutation } from "@tanstack/react-query";
import { apiService } from "@/services";
import { useRouter } from "next/navigation";
import jwtDecode from "jwt-decode";
import { setAccessTokenCookie } from "@/utils/cookie";

export const useLoginMutation = () => {
  const router = useRouter();
  return useMutation(apiService.login, {
    onSuccess: (res) => {
      const decodedData = jwtDecode(res.access_token);
      console.log(decodedData);
      setAccessTokenCookie(res.access_token);
    },
  });
};
