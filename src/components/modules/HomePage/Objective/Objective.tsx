import { Tile } from "@/components/base/tile/Tile";
import { useTranslations } from "next-intl";
import { Text } from "@/components/base/text/Text";
import styles from "./Objective.module.scss";
import { FC } from "react";
import { HomePageTemplateProps } from "@/components/templates/HomePageTemplate/HomePageTemplate";

export interface ObjectiveProps
  extends Pick<HomePageTemplateProps, "objective"> {}

export const Objective: FC<ObjectiveProps> = ({ objective }) => {
  const t = useTranslations("Dashboard.objective");
  return (
    <Tile className={styles.wrapper}>
      <Text
        tag="h2"
        text={t("my-objective")}
        color="white"
        fontFamily="montserrat"
        fontSize="xl"
        weight="500"
        className={styles["header-text"]}
      />
      <ul className={styles.objective}>
        {objective?.map((obj) => (
          <li className={styles["objective-item"]} key={obj.id}>
            <Text
              tag="span"
              text={obj.objective}
              color="gray"
              fontFamily="inter"
            />
            <Text
              tag="span"
              text={obj.amount + " Won"}
              color="gray"
              fontFamily="montserrat"
              weight="700"
            />
          </li>
        ))}
      </ul>
    </Tile>
  );
};
