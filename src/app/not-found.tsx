"use client";

import Error from "next/error";
import { ErrorTemplate } from "@/components/templates/ErrorTemplate/ErrorTemplate";

export default function NotFound() {
  return (
    <html lang="pl">
      <body>
        <ErrorTemplate code={404} />
      </body>
    </html>
  );
}
