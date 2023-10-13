import styles from "./VerificationEmailTemplate.module.scss";
import { Text } from "@/components/base/text/Text";
import { Button } from "@/components/base/button/Button";
import { projectURL } from "@/const/projectURL";
import Image from "next/image";
import EnvelopePass from "@/assets/img/envelopepass.png";
import { ComponentPropsWithoutRef, FC } from "react";

export interface VerificationEmailTemplateProps
  extends ComponentPropsWithoutRef<"div"> {
  locale: string;
}

export const VerificationEmailTemplate: FC<VerificationEmailTemplateProps> = ({
  locale,
}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Image src={EnvelopePass} alt="Akceptacja email" />
      </div>
      <Text
        tag="h1"
        text="Twój email został potwierdzony"
        weight="600"
        fontFamily="montserrat"
        fontSize="xxl"
      />
      <Text
        tag="p"
        text="Mozesz przejść do strony logowania"
        weight="400"
        fontFamily="montserrat"
        fontSize="md"
      />
      <Button
        type="button"
        variant="success"
        size="lg"
        href={projectURL(locale).LOGIN}
        text="Login"
        fontSize="lg"
        fontFamily="inter"
        className={styles.button}
      />
    </div>
  );
};
