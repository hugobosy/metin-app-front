import { VerificationEmailTemplate } from "@/components/templates/VerificationEmailTemplate/VerificationEmailTemplate";

export default function VerificationEmail({
  params,
}: {
  params: { locale: string };
}) {
  return <VerificationEmailTemplate locale={params.locale} />;
}
