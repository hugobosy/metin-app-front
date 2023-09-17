import "./globals.css";
import { ReactNode } from "react";
import "@/styles/main.scss";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
