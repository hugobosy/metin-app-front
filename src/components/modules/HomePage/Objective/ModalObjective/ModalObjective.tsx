import { Modal, ModalProps } from "@/components/base/modal/Modal";
import { useTranslations } from "next-intl";
import { FC, useEffect, useState } from "react";
import { Text } from "@/components/base/text/Text";
import styles from "./ModalObjective.module.scss";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { FormikInput } from "@/components/form/formikInput/FormikInput";
import { Button } from "@/components/base/button/Button";
import { ObjectiveValues } from "@/types/objectiveValues";
import { toast } from "react-toastify";

export interface ModalObjectiveProps extends ModalProps {
  userId?: string;
  addObjective?: any;
  editObjective?: any;
  typeModal: "normal" | "edit";
  objective: ObjectiveValues;
}

export const ModalObjective: FC<ModalObjectiveProps> = ({
  showModal,
  setShowModal,
  userId,
  addObjective,
  typeModal,
  objective,
  editObjective,
}) => {
  const t = useTranslations("Modal.objective");

  const objectiveFormik = useFormik({
    initialValues: {
      idUser: userId,
      objective: typeModal === "edit" ? objective.objective : "",
      amount: typeModal === "edit" ? objective.amount : 0,
    },
    onSubmit: async (values) => {
      if (typeModal === "normal") {
        addObjective(values, {
          onSuccess: () => {
            setShowModal(false);
            location.reload();
            toast.success(t("added-objective"));
          },
        });
      } else {
        console.log({ id: objective.id, values });
        editObjective(
          { id: objective.id, values },
          {
            onSuccess: () => {
              setShowModal(false);
              location.reload();
              toast.success(t("edited-objective"), { delay: 2000 });
            },
          }
        );
      }
    },
    validationSchema: Yup.object().shape({
      objective: Yup.string()
        .min(10, t("min-objective-lenght"))
        .max(255, t("max-objective-lenght"))
        .required(t("required-objective")),
      amount: Yup.number()
        .integer()
        .moreThan(0, t("amount-more-than-0"))
        .required(t("amount-required")),
    }),
  });
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <Text
        tag="h2"
        text={typeModal === "normal" ? t("add-objective") : t("edit-objective")}
        color="white"
        fontFamily="montserrat"
        fontSize="xl"
        weight="500"
        className={styles["header-text"]}
      />
      <FormikProvider value={objectiveFormik}>
        <Form className={styles.form}>
          <FormikInput
            name="objective"
            type="text"
            label={
              typeModal === "normal"
                ? t("label-objective")
                : t("label-objective-edit")
            }
          />
          <FormikInput
            name="amount"
            type="number"
            label={
              typeModal === "normal"
                ? t("label-amount")
                : t("label-amount-edit")
            }
          />
          <Button
            type="submit"
            text={
              typeModal === "normal" ? t("add-objective") : t("edit-objective")
            }
            variant="base"
            className={styles.button}
          />
        </Form>
      </FormikProvider>
    </Modal>
  );
};
