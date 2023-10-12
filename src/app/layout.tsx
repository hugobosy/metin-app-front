import "./globals.css";
import { ReactNode } from "react";
import "@/styles/main.scss";
import TanstackProvider from "@/components/tanstack/TanstackProvider";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
