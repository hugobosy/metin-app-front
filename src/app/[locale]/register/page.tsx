import { RegisterTemplate } from "@/components/templates/RegisterTemplate/RegisterTemplate";

export default function RegisterPage({
  params,
}: {
  params: { locale: string };
}) {
  return <RegisterTemplate locale={params.locale} />;
}
