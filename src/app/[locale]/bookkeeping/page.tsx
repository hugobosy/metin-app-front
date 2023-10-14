"use client";
import { useAuthQuery } from "@/hooks/queries/useAuthQuery";
import { getAccessTokenCookie, removeAccessTokenCookie } from "@/utils/cookie";
import { redirect } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { BookkeepingTemplate } from "@/components/templates/BookkeepingTemplate/BookkeepingTemplate";

export default function BookkeepingPage({
  params,
}: {
  params: { locale: string };
}) {
  const { data, isError } = useAuthQuery(getAccessTokenCookie());
  if (isError) {
    removeAccessTokenCookie();
    return redirect(`/${params.locale}/login`);
  }

  return (
    <Layout locale={params.locale} username={data?.username}>
      <BookkeepingTemplate />
    </Layout>
  );
}
