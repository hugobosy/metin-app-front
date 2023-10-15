"use client";

import { useAuthQuery } from "@/hooks/queries/useAuthQuery";
import { getAccessTokenCookie, removeAccessTokenCookie } from "@/utils/cookie";
import { redirect } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { HomePageTemplate } from "@/components/templates/HomePageTemplate/HomePageTemplate";
import { useGetExpenses } from "@/hooks/queries/useGetExpenses";
import { ExpansesValues } from "@/types/expansesValues";

export default function HomePage({ params }: { params: { locale: string } }) {
  const {
    data: user,
    isError: userError,
    isLoading: loadingUser,
  } = useAuthQuery(getAccessTokenCookie());
  const {
    data: expenses,
    isError: expensesError,
    isLoading: expensesLoading,
  } = useGetExpenses(loadingUser ? null : user?.id);
  if (userError) {
    removeAccessTokenCookie();
    return redirect(`/${params.locale}/login`);
  }

  return (
    <Layout locale={params.locale} username={user?.username}>
      <HomePageTemplate
        expenses={expenses?.data}
        revenues={0}
        expensesLoading={expensesLoading}
      />
    </Layout>
  );
}
