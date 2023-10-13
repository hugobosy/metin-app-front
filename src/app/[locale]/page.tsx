"use client";

import { useAuthQuery } from "@/hooks/queries/useAuthQuery";
import { getAccessTokenCookie, removeAccessTokenCookie } from "@/utils/cookie";
import { redirect } from "next/navigation";
import { Tile } from "@/components/base/tile/Tile";

export default function HomePage({ params }: { params: { locale: string } }) {
  const { data, isError } = useAuthQuery(getAccessTokenCookie());
  if (isError) {
    removeAccessTokenCookie();
    return redirect(`/${params.locale}/login`);
  }
  return (
    <Tile>
      <p>{data?.username}</p>
    </Tile>
  );
}
