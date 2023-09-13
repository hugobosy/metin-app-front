import styles from "./LoginPage.module.scss";
import { Form } from "@/components/modules/Login/Form/Form";

export const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <Form />
    </div>
  );
};
