import styles from "./ErrorTemplate.module.scss";
import { ComponentPropsWithoutRef, FC } from "react";
import { Text } from "@/components/base/text/Text";
import Image from "next/image";
import NotFound from "@/assets/img/404.png";
import ErrorServer from "@/assets/img/500.png";
import BadGateway from "@/assets/img/502.png";
import { Button } from "@/components/base/button/Button";
import { projectURL } from "@/const/projectURL";
import "dotenv/config";
import { useTranslations } from "next-intl";

export interface ErrorTemplateProps extends ComponentPropsWithoutRef<"div"> {
  code: number;
  locale?: string;
}
export const ErrorTemplate: FC<ErrorTemplateProps> = ({ code, locale }) => {
  const t = useTranslations("ErrorPage");
  if (code === 404) {
    return (
      <div className={styles.wrapper}>
        <Image src={NotFound} alt={t("404")} />
        <Text
          tag="h1"
          text={t("404")}
          fontFamily="montserrat"
          fontSize="xxl"
          weight="700"
        />
      </div>
    );
  }
  if (code === 500) {
    return (
      <div className={styles.wrapper}>
        <Image src={ErrorServer} alt={t("500")} />
        <Text
          tag="h1"
          text={t("500")}
          fontFamily="montserrat"
          fontSize="xxl"
          weight="700"
        />
      </div>
    );
  }
  if (code === 502) {
    return (
      <div className={styles.wrapper}>
        <Image src={BadGateway} alt={t("502.alt")} />
        <Text
          tag="h1"
          text={t("502.header")}
          fontFamily="montserrat"
          fontSize="xxl"
          weight="700"
        />
        <Text
          tag="p"
          text={t("502.description")}
          fontFamily="inter"
          fontSize="md"
          weight="400"
        />
        <Button
          type="button"
          text={t("502.link")}
          href={projectURL(locale ? locale : "pl").LOGIN}
          variant="success"
          size="lg"
        />
      </div>
    );
  }
};
