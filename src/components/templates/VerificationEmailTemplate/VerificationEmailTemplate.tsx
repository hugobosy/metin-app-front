import { useRouter } from "next/router";
import styles from "./VerificationEmailTemplate.module.scss";

export const VerificationEmailTemplate = () => {
  const router = useRouter();
  console.log(router.query);
  return <h1>Weryfikacja email: Proszę sprawdzić podany email</h1>;
};
