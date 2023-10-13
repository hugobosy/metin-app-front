"use client";

import { useAuthQuery } from "@/hooks/queries/useAuthQuery";
import { getAccessTokenCookie, removeAccessTokenCookie } from "@/utils/cookie";
import { redirect } from "next/navigation";
import { Tile } from "@/components/base/tile/Tile";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";

export default function HomePage({ params }: { params: { locale: string } }) {
  const [isLanguageMenu, setIsLanguageMenu] = useState(false);
  const { data, isError } = useAuthQuery(getAccessTokenCookie());
  if (isError) {
    removeAccessTokenCookie();
    return redirect(`/${params.locale}/login`);
  }
  return (
    <Layout isLanguageMenu={isLanguageMenu} setLanguageMenu={setIsLanguageMenu}>
      {data?.username}
    </Layout>
  );
}
