"use client";

import { useTranslations } from "next-intl";
import { useAuthQuery } from "@/hooks/queries/useAuthQuery";
import { getAccessTokenCookie, removeAccessTokenCookie } from "@/utils/cookie";
import { redirect, useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const t = useTranslations("HomePage");
  const { data, isError } = useAuthQuery(getAccessTokenCookie());
  console.log(data);
  if (isError) {
    removeAccessTokenCookie();
    return redirect("/pl/login");
  }
  return <p>{data?.username}</p>;
}
