import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import React, { ReactNode } from "react";
import TanstackProvider from "@/components/tanstack/TanstackProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function generateStaticParams() {
  return [{ locale: "pl" }, { locale: "en" }, { locale: "de" }];
}

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <TanstackProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
            <ToastContainer />
          </NextIntlClientProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
