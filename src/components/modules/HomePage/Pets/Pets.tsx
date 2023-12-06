import { Tile } from "@/components/base/tile/Tile";

import styles from "./Pets.module.scss";
import { Text } from "@/components/base/text/Text";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { HomePageTemplateProps } from "@/components/templates/HomePageTemplate/HomePageTemplate";

export interface PetsProps extends Pick<HomePageTemplateProps, "pets"> {}

export const Pets: FC<PetsProps> = ({ pets }) => {
  const t = useTranslations("Dashboard.pets");
  console.log(pets);
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
