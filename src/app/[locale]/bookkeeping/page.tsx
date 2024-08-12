"use client";
import { useAuthQuery } from "@/hooks/queries/useAuthQuery";
import { getAccessTokenCookie, removeAccessTokenCookie } from "@/utils/cookie";
import { redirect } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { BookkeepingTemplate } from "@/components/templates/BookkeepingTemplate/BookkeepingTemplate";
import { useGetExpenses } from "@/hooks/queries/useGetExpenses";
import { useGetBalance } from "@/hooks/queries/useGetBalance";
import { useGetRevenues } from "@/hooks/queries/useGetRevenues";

export default function BookkeepingPage({
  params,
}: {
  params: { locale: string };
}) {
  const { data: user, isError: userError } = useAuthQuery(
    getAccessTokenCookie(),
  );
  if (userError) {
    removeAccessTokenCookie();
    return redirect(`/${params.locale}/login`);
  }
  const { data: balance, isLoading: balanceLoading } = useGetBalance(
    user && user?.id,
  );
  const {
    data: expenses,
    isError: expensesError,
    isLoading: expensesLoading,
  } = useGetExpenses(user?.id);
  const {
    data: revenues,
    isError: revenuesError,
    isLoading: revenuesLoading,
  } = useGetRevenues(user?.id);

  return (
    <Layout
      locale={params.locale}
      username={user?.username}
      balanceWon={balance?.data.balanceWon}
      balanceYang={balance?.data.balanceYang}
      userId={user?.id}
    >
      <BookkeepingTemplate
        expenses={expenses?.data}
        revenues={revenues?.data}
      />
    </Layout>
  );
}
