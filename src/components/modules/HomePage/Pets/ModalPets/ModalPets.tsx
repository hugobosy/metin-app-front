import styles from "./ModalPets.module.scss";
import { Modal, ModalProps } from "@/components/base/modal/Modal";
import { FC } from "react";
import { PetsName } from "@/types/petsValues";
import { Text } from "@/components/base/text/Text";
import { useTranslations } from "next-intl";
import { Form, FormikProvider, useFormik } from "formik";
import { Select } from "@/components/form/Select/Select";

export interface ModalPetsProps extends ModalProps {
  pets?: PetsName[] & string[];
}

export const ModalPets: FC<ModalPetsProps> = ({
  showModal,
  setShowModal,
  pets,
}) => {
  const t = useTranslations("Dashboard.pets");

  const addPetForm = useFormik({
    initialValues: {},
    onSubmit: () => location.reload(),
    validationSchema: {},
  });

  console.log(pets);

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <Text
        tag="h2"
        text={t("add-pet")}
        fontFamily="inter"
        fontSize="xl"
        weight="500"
        color="white"
      />
      <FormikProvider value={addPetForm}>
        <Form className={styles.form}>
          <Select
            options={pets?.map((pet) => ({ name: pet.name, id: pet.id }))}
            label={t("choose-pet")}
          />
        </Form>
      </FormikProvider>
    </Modal>
  );
};
