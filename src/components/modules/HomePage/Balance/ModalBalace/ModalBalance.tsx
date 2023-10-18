import { Modal, ModalProps } from "@/components/base/modal/Modal";
import styles from "./ModalBalance.module.scss";
import { FC } from "react";
import { Text } from "@/components/base/text/Text";
import { useTranslations } from "next-intl";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { FormikInput } from "@/components/form/formikInput/FormikInput";
import { Button } from "@/components/base/button/Button";
import { toast } from "react-toastify";

export interface ModalBalanceProps extends ModalProps {
  type: "revenues" | "expenses" | null;
  userId?: string;
  addExpenses?: any;
  addRevenues?: any;
}

export const ModalBalance: FC<ModalBalanceProps> = ({
  showModal,
  setShowModal,
  type,
  userId,
  addRevenues,
  addExpenses,
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
    onSubmit: async (values) => {
      if (values.priceWon === 0 && values.priceYang === 0) {
        toast.error(t("values-price-cannot-null"), { autoClose: 1500 });
        return;
      }
      if (type === "revenues") {
        addRevenues &&
          addRevenues(values, {
            onSuccess: () => {
              setShowModal(false);
              location.reload();
            },
          });
        return;
      }
      if (type === "expenses") {
        addExpenses &&
          addExpenses(values, {
            onSuccess: () => {
              setShowModal(false);
              location.reload();
            },
          });
      }
    },
    validationSchema: Yup.object().shape({
      item: Yup.string().min(3).max(255).required(),
      count: Yup.number().integer().moreThan(0).required(),
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
          <FormikInput type="text" name="item" label={t("item-label")} />
          <FormikInput type="number" name="count" required label={t("count")} />
          <FormikInput type="number" name="priceYang" label={t("price-yang")} />
          <FormikInput type="number" name="priceWon" label={t("price-won")} />
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
