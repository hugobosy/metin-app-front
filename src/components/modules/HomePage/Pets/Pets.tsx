import { Tile } from "@/components/base/tile/Tile";

import styles from "./Pets.module.scss";
import { Text } from "@/components/base/text/Text";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { HomePageTemplateProps } from "@/components/templates/HomePageTemplate/HomePageTemplate";
import { Pet } from "@/components/base/pet/pet";

export interface PetsProps extends Pick<HomePageTemplateProps, "userPets"> {}

export const Pets: FC<PetsProps> = ({ userPets }) => {
  const t = useTranslations("Dashboard.pets");
  console.log(userPets);
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
      <div className={styles.pets}>
        <Pet name="Monkey" alt="Monkey" src="" />
      </div>
    </Tile>
  );
};
