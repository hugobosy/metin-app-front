import { Modal, ModalProps } from "@/components/base/modal/Modal";
import styles from "./ModalBalance.module.scss";
import { FC } from "react";
import { Text } from "@/components/base/text/Text";
import { useTranslations } from "next-intl";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { FormikInput } from "@/components/form/formikInput/FormikInput";
import { Button } from "@/components/base/button/Button";

export interface ModalBalanceProps extends ModalProps {
  type: "revenues" | "expenses" | null;
  userId?: string;
}

export const ModalBalance: FC<ModalBalanceProps> = ({
  showModal,
  setShowModal,
  type,
  userId,
}) => {
  const t = useTranslations(
    type === "revenues" ? "Modal.revenues" : "Modal.expenses"
  );

  const balanceForm = useFormik({
    initialValues: {
      idUser: userId,
      item: "",
      count: 0,
      priceYang: 0,
      priceWon: 0,
    },
    onSubmit: async (values) => console.log(values),
    validationSchema: Yup.object().shape({
      item: Yup.string().min(3).max(255).required(),
      count: Yup.number().required(),
      priceYang: Yup.number().required(),
      priceWon: Yup.number().required(),
    }),
  });
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <Text
        tag="h2"
        text={t("add")}
        fontFamily="inter"
        fontSize="xl"
        weight="500"
        color="white"
      />
      <FormikProvider value={balanceForm}>
        <Form className={styles.form}>
          <FormikInput
            type="text"
            name="item"
            required
            label={t("item-label")}
          />
          <FormikInput type="number" name="count" required label={t("count")} />
          <FormikInput
            type="number"
            name="priceYang"
            required
            label={t("price-yang")}
          />
          <FormikInput
            type="number"
            name="priceWon"
            required
            label={t("price-won")}
          />
          <Button
            type="submit"
            text={t("add")}
            variant="base"
            className={styles.button}
          />
        </Form>
      </FormikProvider>
    </Modal>
  );
};
