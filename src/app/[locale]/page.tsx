"use client";

import { useAuthQuery } from "@/hooks/queries/useAuthQuery";
import { getAccessTokenCookie, removeAccessTokenCookie } from "@/utils/cookie";
import { redirect } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { HomePageTemplate } from "@/components/templates/HomePageTemplate/HomePageTemplate";
import { useGetExpenses } from "@/hooks/queries/useGetExpenses";
import { ExpansesValues } from "@/types/expansesValues";
import { useGetRevenues } from "@/hooks/queries/useGetRevenues";

export default function HomePage({ params }: { params: { locale: string } }) {
  const {
    data: user,
    isError: userError,
    isLoading: loadingUser,
  } = useAuthQuery(getAccessTokenCookie());
  const { data: expenses, isLoading: expensesLoading } = useGetExpenses(
    loadingUser ? null : user?.id,
  );
  const { data: revenues, isLoading: revenuesLoading } = useGetRevenues(
    user && user.id,
  );
  if (userError) {
    removeAccessTokenCookie();
    return redirect(`/${params.locale}/login`);
  }

  console.log(revenues);

  return (
    <Layout locale={params.locale} username={user?.username}>
      <HomePageTemplate
        expenses={expenses?.data}
        revenues={revenues?.data}
        expensesLoading={expensesLoading}
        revenuesLoading={revenuesLoading}
      />
    </Layout>
  );
}
