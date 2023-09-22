import { RegisterTemplate } from "@/components/templates/RegisterTemplate/RegisterTemplate";
import { useMutation } from "@tanstack/react-query";
import { projectURL } from "@/const/projectURL";
import { apiService } from "@/services";
import { GetStaticProps } from "next";

export default function RegisterPage() {
  return <RegisterTemplate />;
}
