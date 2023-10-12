import styles from "./ThanksForRegisterTemplate.module.scss";
import Image from "next/image";
import envelope from "@/assets/img/envelope.png";
import { Text } from "@/components/base/text/Text";
export const ThanksForRegisterTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img}>
        <Image src={envelope} alt="Koperta" />
      </div>
      <div className={styles.info}>
        <Text
          tag="h1"
          text="Dziękujemy za rejestrację!"
          weight="700"
          fontFamily="montserrat"
          fontSize="xxl"
        />
        <Text
          tag="p"
          text="Na podany e-mail wysłaliśmy link z potwierdzeniem wiarygodności adresu e-mail"
          weight="400"
          fontFamily="inter"
          fontSize="md"
        />
      </div>
    </div>
  );
};
