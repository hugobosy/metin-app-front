"use client";

import { useAuthQuery } from "@/hooks/queries/useAuthQuery";
import { getAccessTokenCookie, removeAccessTokenCookie } from "@/utils/cookie";
import { redirect } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { HomePageTemplate } from "@/components/templates/HomePageTemplate/HomePageTemplate";
import { useGetExpenses } from "@/hooks/queries/useGetExpenses";
import { ExpansesValues } from "@/types/expansesValues";
import { useGetRevenues } from "@/hooks/queries/useGetRevenues";
import { useGetObjective } from "@/hooks/queries/useGetObjective";

export default function HomePage({ params }: { params: { locale: string } }) {
  const {
    data: user,
    isError: userError,
    isLoading: loadingUser,
  } = useAuthQuery(getAccessTokenCookie());
  const { data: expenses, isLoading: expensesLoading } = useGetExpenses(
    user && user.id,
  );
  const { data: revenues, isLoading: revenuesLoading } = useGetRevenues(
    user && user.id,
  );
  const { data: objective, isLoading: objectiveLoading } = useGetObjective(
    user && user.id,
  );
  if (userError) {
    removeAccessTokenCookie();
    return redirect(`/${params.locale}/login`);
  }

  const loading = expensesLoading || revenuesLoading || objectiveLoading;

  return (
    <Layout locale={params.locale} username={user?.username}>
      <HomePageTemplate
        expenses={expenses?.data}
        revenues={revenues?.data}
        objective={objective?.data}
        loading={loading}
      />
    </Layout>
  );
}
