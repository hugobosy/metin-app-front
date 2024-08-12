"use client";
import { useAuthQuery } from "@/hooks/queries/useAuthQuery";
import { getAccessTokenCookie, removeAccessTokenCookie } from "@/utils/cookie";
import { redirect } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { BookkeepingTemplate } from "@/components/templates/BookkeepingTemplate/BookkeepingTemplate";
import { useGetExpenses } from "@/hooks/queries/useGetExpenses";
import { useGetBalance } from "@/hooks/queries/useGetBalance";
import { useGetRevenues } from "@/hooks/queries/useGetRevenues";
import { useEffect } from "react";

export default function BookkeepingPage({
  params,
}: {
  params: { locale: string };
}) {
  const { data: user, isError: userError } = useAuthQuery(
    getAccessTokenCookie(),
  );

  // const { data: expenses, isLoading: expensesLoading } = useGetExpenses(
  //   user && user?.id,
  // );
  // const { data: revenues, isLoading: revenuesLoading } = useGetRevenues(
  //   user && user.id,
  // );

  const { data: balance, isLoading: balanceLoading } = useGetBalance(
    user && user?.id,
  );

  if (userError) {
    removeAccessTokenCookie();
    return redirect(`/${params.locale}/login`);
  }

  // const loading = expensesLoading || revenuesLoading;
  return (
    <Layout
      locale={params.locale}
      username={user?.username}
      balanceWon={balance?.data.balanceWon}
      balanceYang={balance?.data.balanceYang}
      userId={user?.id}
    >
      <BookkeepingTemplate
      // loading={loading}
      // expenses={expenses?.data}
      // revenues={revenues?.data}
      />
    </Layout>
  );
}
