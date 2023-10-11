"use client";
import { useActivateQuery } from "@/hooks/queries/useActivateQuery";
import { Spinner } from "@/components/base/spinner/Spinner";
import Error from "next/error";
import { redirect } from "next/navigation";

export default function Page({ params }: { params: { code: string } }) {
  const { data, isError, isLoading } = useActivateQuery(params.code);
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Error statusCode={500} />;
  }

  if (data.data.code === 502) {
    return <Error statusCode={502} />;
  }
  return redirect(`/pl/verification-email`);
}
