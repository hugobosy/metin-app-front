import { LoginTemplate } from "@/components/templates/LoginTemplate/LoginTemplate";

export default function LoginPage({ params }: { params: { locale: string } }) {
  return <LoginTemplate locale={params.locale} />;
}
