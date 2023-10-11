import "./globals.css";
import { ReactNode } from "react";
import "@/styles/main.scss";
import TanstackProvider from "@/components/tanstack/TanstackProvider";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
