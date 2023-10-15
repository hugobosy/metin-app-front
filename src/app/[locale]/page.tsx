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
  const { data: expenses, isError: expansesError } = useGetExpenses(
    loadingUser ? null : user.id,
  );
  if (userError) {
    removeAccessTokenCookie();
    return redirect(`/${params.locale}/login`);
  }

  const expensesData = expenses?.filter(
    (data: ExpansesValues) => data.idUser === user.id,
  );

  return (
    <Layout locale={params.locale} username={user?.username}>
      <HomePageTemplate expenses={expensesData} revenues={0} />
    </Layout>
  );
}
