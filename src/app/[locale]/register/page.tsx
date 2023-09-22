import { RegisterTemplate } from "@/components/templates/RegisterTemplate/RegisterTemplate";
import { useMutation } from "@tanstack/react-query";
import { projectURL } from "@/const/projectURL";
import { apiService } from "@/services";
import { GetStaticProps } from "next";

export interface RegisterPageProps {
  locale: string;
}

export default function RegisterPage(locale: RegisterPageProps) {
  return <RegisterTemplate locale={locale} />;
}

const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
    },
  };
};
