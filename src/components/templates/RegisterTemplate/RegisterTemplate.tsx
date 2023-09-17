"use client";
import styles from "./RegisterTemplate.module.scss";
import { useTranslations } from "next-intl";
import { Text } from "@/components/base/text/Text";
export const RegisterTemplate = () => {
  const t = useTranslations("RegisterPage");
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <Text
          tag="h1"
          text={t("create-account")}
          fontSize="xxl"
          isUppercase
          weight="700"
        />
      </div>
    </div>
  );
};
