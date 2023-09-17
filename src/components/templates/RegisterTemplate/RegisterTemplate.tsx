"use client";
import styles from "./RegisterTemplate.module.scss";
import { useTranslations } from "next-intl";
import { Text } from "@/components/base/text/Text";
import { Input } from "@/components/form/input/Input";
import { Checkbox } from "@/components/form/checkbox/Checkbox";
import { Button } from "@/components/base/button/Button";
import Link from "next/link";
import { projectURL } from "@/const/projectURL";
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
          <Checkbox />
          <Button type="submit" text={t("sign-up")} className={styles.button} />
        </form>

        <div>
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
          />
        </div>
      </div>
    </div>
  );
};
