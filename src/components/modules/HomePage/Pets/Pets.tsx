import { Tile } from "@/components/base/tile/Tile";

import styles from "./Pets.module.scss";
import { Text } from "@/components/base/text/Text";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { HomePageTemplateProps } from "@/components/templates/HomePageTemplate/HomePageTemplate";
import { Pet } from "@/components/base/pet/Pet";
import { Button } from "@/components/base/button/Button";
import { ModalPets } from "@/components/modules/HomePage/Pets/ModalPets/ModalPets";
import { PetsName } from "@/types/petsValues";

export interface PetsProps extends Pick<HomePageTemplateProps, "userPets"> {
  pets?: PetsName[] & string[];
}

export const Pets: FC<PetsProps> = ({ userPets, pets }) => {
  const t = useTranslations("Dashboard.pets");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Tile className={styles.wrapper}>
        <div className={styles.header}>
          <Text
            tag="h2"
            text={t("my-pets")}
            color="white"
            fontFamily="montserrat"
            fontSize="xl"
            weight="500"
            className={styles["header-text"]}
          />
          <Button
            text={t("add-pet")}
            variant="base"
            className={styles["header-button"]}
            weight="700"
            fontFamily="montserrat"
            size="md"
            onClick={() => setShowModal(!showModal)}
          />
        </div>
        <div className={styles.pets}>
          {userPets?.map((pet) => (
            <div key={pet.pets.name} className={styles["pets-pet"]}>
              <Pet name={pet.pets.name} />
            </div>
          ))}
        </div>
      </Tile>
      <ModalPets
        showModal={showModal}
        setShowModal={setShowModal}
        pets={pets}
      />
    </>
  );
};
