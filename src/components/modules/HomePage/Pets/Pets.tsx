import { Tile } from "@/components/base/tile/Tile";

import styles from "./Pets.module.scss";
import { Text } from "@/components/base/text/Text";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { HomePageTemplateProps } from "@/components/templates/HomePageTemplate/HomePageTemplate";
import { Button } from "@/components/base/button/Button";
import { ModalPets } from "@/components/modules/HomePage/Pets/ModalPets/ModalPets";
import { PetsName } from "@/types/petsValues";
import { useAddPetMutation } from "@/hooks/mutations/useAddPet";
import { PetComponent } from "@/components/modules/HomePage/Pets/Pet/PetComponent";
import { projectURL } from "@/const/projectURL";

export interface PetsProps extends Pick<HomePageTemplateProps, "userPets"> {
  pets?: PetsName[] & string[];
  userId?: string;
  locale?: string;
}

export const Pets: FC<PetsProps> = ({ userPets, userId, pets, locale }) => {
  const t = useTranslations("Dashboard.pets");
  const [showModal, setShowModal] = useState(false);

  const { mutate: addPet, isLoading: loadingAddPet } = useAddPetMutation();

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
          {userPets?.map((pet, index) => {
            if (index < 1) {
              return;
            }
            return (
              <PetComponent
                name={pet.name}
                id={pet.id}
                level={pet.level}
                petName={pet.pets.name}
                hp={pet.hp}
                def={pet.def}
                he={pet.he}
              />
            );
          })}
        </div>
        <Button
          text={t("see-more")}
          href={projectURL(locale as string).ANIMALS}
          size="sm"
          fontColor="white"
          fontFamily="montserrat"
        />
      </Tile>
      <ModalPets
        showModal={showModal}
        setShowModal={setShowModal}
        pets={pets}
        userId={userId}
        addPet={addPet}
      />
    </>
  );
};
