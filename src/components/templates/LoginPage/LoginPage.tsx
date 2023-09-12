import styles from "./LoginPage.module.scss";
import { Hero } from "@/components/modules/Login/Hero/Hero";
import { Form } from "@/components/modules/Login/Form/Form";

export const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <Form />
    </div>
  );
};
