import { Tile } from "@/components/base/tile/Tile";

import styles from "./Pets.module.scss";
import { Text } from "@/components/base/text/Text";
import { useTranslations } from "next-intl";

export const Pets = () => {
  const t = useTranslations("Dashboard.pets");
  return (
    <Tile className={styles.wrapper}>
      <Text
        tag="h2"
        text={t("my-pets")}
        color="white"
        fontFamily="montserrat"
        fontSize="xl"
        weight="500"
        className={styles["header-text"]}
      />
    </Tile>
  );
};
