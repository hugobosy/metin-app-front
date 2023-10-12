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

export interface ErrorTemplateProps extends ComponentPropsWithoutRef<"div"> {
  code: number;
  locale?: string;
}
export const ErrorTemplate: FC<ErrorTemplateProps> = ({ code, locale }) => {
  if (code === 404) {
    return (
      <div className={styles.wrapper}>
        <Image src={NotFound} alt="Nie odnaleziono storny" />
      </div>
    );
  }
  if (code === 500) {
    return (
      <div className={styles.wrapper}>
        <Image src={ErrorServer} alt="Błąd serwera" />
      </div>
    );
  }
  if (code === 502) {
    return (
      <div className={styles.wrapper}>
        <Image src={BadGateway} alt="Bład potwierdzenia email" />
        <Text
          tag="h1"
          text="Błąd potwierdzenia adresu email!"
          fontFamily="montserrat"
          fontSize="xxl"
          weight="700"
        />
        <Text
          tag="p"
          text="Twoje konto jest juz aktywne bądź kod potwierdzenia jest nieprawidłowy"
          fontFamily="inter"
          fontSize="md"
          weight="400"
        />
        <Button
          type="button"
          text="Przejdź do strony logowania"
          href={projectURL(locale ? locale : "pl").LOGIN}
          variant="success"
          size="lg"
        />
      </div>
    );
  }
};
