"use client";
import styles from "./RegisterTemplate.module.scss";
import { useTranslations } from "next-intl";
import { Text } from "@/components/base/text/Text";
import { Input } from "@/components/form/input/Input";
import { Checkbox } from "@/components/form/checkbox/Checkbox";
import { Button } from "@/components/base/button/Button";
import { projectURL } from "@/const/projectURL";
import { useFormik } from "formik";
export const RegisterTemplate = () => {
  const t = useTranslations("RegisterPage");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: () => {},
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <Text
          tag="h1"
          text={t("create-account")}
          fontSize="xl"
          isUppercase
          weight="700"
          fontFamily="inter"
          className={styles.header}
        />
        <form className={styles["form-inner"]}>
          <div>
            <Input
              type="text"
              name="name"
              required
              placeholder={t("your-name")}
            />
            <Input
              type="text"
              name="email"
              required
              placeholder={t("your-email")}
            />
            <Input
              type="password"
              name="password"
              required
              placeholder={t("password")}
            />
            <Input
              type="password"
              required
              placeholder={t("repeat-your-password")}
            />
          </div>
          <Checkbox label={t("i-agree-all-statements-in")} color="green" />
          <Button
            type="submit"
            text={t("sign-up")}
            className={styles.button}
            variant="success"
            size="lg"
          />
        </form>

        <div className={styles["form-isAccount"]}>
          <Text
            tag="span"
            text={t("have-already-an-account")}
            fontSize="md"
            fontFamily="inter"
          />
          <Button
            href={projectURL.LOGIN}
            type="button"
            text={t("login-here")}
            size="sm"
            fontSize="md"
            fontFamily="inter"
            fontColor="black"
            weight="700"
          />
        </div>
      </div>
    </div>
  );
};
