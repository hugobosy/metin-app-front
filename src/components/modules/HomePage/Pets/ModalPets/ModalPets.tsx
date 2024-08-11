import styles from "./ModalPets.module.scss";
import { Modal, ModalProps } from "@/components/base/modal/Modal";
import { FC } from "react";
import { PetsName } from "@/types/petsValues";
import { Text } from "@/components/base/text/Text";
import { useTranslations } from "next-intl";
import { Form, FormikProvider, useFormik } from "formik";
import { Select } from "@/components/form/Select/Select";
import { Button } from "@/components/base/button/Button";
import * as Yup from "yup";
import { FormikInput } from "@/components/form/formikInput/FormikInput";
import { toast } from "react-toastify";

export interface ModalPetsProps extends ModalProps {
  pets?: PetsName[] & string[];
  userId?: string;
  addPet?: any;
}

export const ModalPets: FC<ModalPetsProps> = ({
  showModal,
  setShowModal,
  pets,
  userId,
  addPet,
}) => {
  const t = useTranslations("Modal.pets");

  const addPetForm = useFormik({
    initialValues: {
      userId: userId ? userId : "",
      petId: "",
      name: "",
      level: 0,
      type: 0,
      hp: 0,
      def: 0,
      he: 0,
    },
    onSubmit: async (values) => {
      addPet(values, {
        onSuccess: () => {
          setShowModal(false);
          location.reload();
        },

        onError: () => {
          toast.error("Something went wrong");
        },
      });
      console.log(values);
    },
    validationSchema: Yup.object().shape({
      petId: Yup.string().required(t("choose-your-pet")),
      name: Yup.string().required(t("choose-your-pet-name")),
      level: Yup.number()
        .min(1, t("level-must-be-min-0"))
        .max(105, t("level-must-be-max-105"))
        .required(t("choose-your-pet-level")),
      type: Yup.number()
        .min(1, t("type-min-1"))
        .max(8, t("type-max-8"))
        .required(t("choose-your-pet-type")),
      hp: Yup.number()
        .moreThan(0, t("hp-more-than-0"))
        .required(t("choose-your-pet-hp")),
      def: Yup.number()
        .moreThan(0, t("def-more-than-0"))
        .required(t("choose-your-pet-def")),
      he: Yup.number()
        .moreThan(0, t("he-more-than-0"))
        .required(t("choose-your-pet-he")),
    }),
  });

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
            name="petId"
            onChange={addPetForm.handleChange}
            options={pets?.map((pet) => ({ name: pet.name, id: pet.id }))}
            label={t("your-pet")}
            errorMessage={addPetForm.errors.petId}
            optionHeader={t("choose-your-pet-select-header")}
          />
          <FormikInput type="text" name="name" label={t("pet-name")} />
          <FormikInput type="number" name="level" label={t("pet-level")} />
          <FormikInput type="number" name="type" label={t("pet-type")} />
          <FormikInput type="number" name="hp" label={t("pet-hp")} />
          <FormikInput type="number" name="def" label={t("pet-def")} />
          <FormikInput type="number" name="he" label={t("pet-he")} />
          <Button
            type="submit"
            text={t("add-pet")}
            variant="base"
            size="lg"
            className={styles.button}
          />
        </Form>
      </FormikProvider>
    </Modal>
  );
};
