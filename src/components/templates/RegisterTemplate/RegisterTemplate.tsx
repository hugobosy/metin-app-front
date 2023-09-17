"use client";
import styles from "./RegisterTemplate.module.scss";
import { useTranslations } from "next-intl";
import { Text } from "@/components/base/text/Text";
import { Input } from "@/components/form/input/Input";
export const RegisterTemplate = () => {
  const t = useTranslations("RegisterPage");
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
        />
        <form className={styles["form-inner"]}>
          <Input type="text" required placeholder={t("your-name")} />
          <Input type="text" required placeholder={t("your-email")} />
          <Input type="password" required placeholder={t("password")} />
          <Input
            type="password"
            required
            placeholder={t("repeat-your-password")}
          />
        </form>
      </div>
    </div>
  );
};
