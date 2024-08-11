import styles from "./PetComponent.module.scss";
import { Text } from "@/components/base/text/Text";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { Pet } from "@/components/base/pet/Pet";

export interface PetProps {
  name: string;
  id: string;
  level: number;
  petName: any;
  hp: number;
  def: number;
  he: number;
}

export const PetComponent: FC<PetProps> = ({
  name,
  id,
  level,
  petName,
  hp,
  def,
  he,
}) => {
  const t = useTranslations("Dashboard.pets");
  return (
    <div key={id} className={styles.pet}>
      <div className={styles["pet-header"]}>
        <Pet name={petName} />
        <div>
          <Text tag="span" text={t("level")} color="white" fontFamily="inter" />{" "}
          <Text tag="span" text={level} color="green" fontFamily="inter" />
          <Text tag="p" text={name} color="white" fontFamily="montserrat" />
        </div>
      </div>
      <Text tag="p">
        <Text
          tag="span"
          text={t("hit-points")}
          color="white"
          fontFamily="inter"
        />{" "}
        <Text
          tag="span"
          text={hp}
          color="red"
          weight="700"
          fontFamily="montserrat"
        />
      </Text>
      <Text tag="p">
        <Text tag="span" text={t("defence")} color="white" fontFamily="inter" />{" "}
        <Text
          tag="span"
          text={def}
          color="red"
          weight="700"
          fontFamily="montserrat"
        />
      </Text>
      <Text tag="p">
        <Text
          tag="span"
          text={t("hit-energy")}
          color="white"
          fontFamily="inter"
        />{" "}
        <Text
          tag="span"
          text={he}
          color="red"
          weight="700"
          fontFamily="montserrat"
        />
      </Text>
    </div>
  );
};
