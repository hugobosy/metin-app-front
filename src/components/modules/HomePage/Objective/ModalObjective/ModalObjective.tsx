import { Modal, ModalProps } from "@/components/base/modal/Modal";
import { useTranslations } from "next-intl";
import { FC } from "react";
import { Text } from "@/components/base/text/Text";
import styles from "./ModalObjective.module.scss";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { FormikInput } from "@/components/form/formikInput/FormikInput";
import { Button } from "@/components/base/button/Button";

export interface ModalObjectiveProps extends ModalProps {
  userId?: string;
  addObjective?: any;
}

export const ModalObjective: FC<ModalObjectiveProps> = ({
  showModal,
  setShowModal,
  userId,
  addObjective,
}) => {
  const t = useTranslations("Modal.objective");

  const objectiveFormik = useFormik({
    initialValues: {
      idUser: userId,
      objective: "",
      amount: 0,
    },
    onSubmit: async (values) =>
      addObjective(values, {
        onSuccess: () => {
          setShowModal(false);
          location.reload();
        },
      }),
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
        text={t("add-objective")}
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
            label={t("label-objective")}
          />
          <FormikInput name="amount" type="number" label={t("label-amount")} />
          <Button
            type="submit"
            text={t("add-objective")}
            variant="base"
            className={styles.button}
          />
        </Form>
      </FormikProvider>
    </Modal>
  );
};
