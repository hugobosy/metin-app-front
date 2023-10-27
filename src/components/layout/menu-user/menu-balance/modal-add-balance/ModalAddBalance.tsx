import { Modal, ModalProps } from "@/components/base/modal/Modal";
import { FC } from "react";
import { Text } from "@/components/base/text/Text";
import { useTranslations } from "next-intl";
import { Form, FormikProvider, useFormik } from "formik";
import { FormikInput } from "@/components/form/formikInput/FormikInput";
import { Button } from "@/components/base/button/Button";

import styles from "./ModalAddBalance.module.scss";
import { useUpdateBalance } from "@/hooks/mutations/useUpdateBalance";

export interface ModalAddBalanceProps extends ModalProps {
  userId?: string;
  updateBalance: any;
}

export const ModalAddBalance: FC<ModalAddBalanceProps> = ({
  showModal,
  setShowModal,
  userId,
  updateBalance,
}) => {
  const t = useTranslations("Layout.modal-balance");

  const balanceForm = useFormik({
    initialValues: {
      balanceWon: 0,
      balanceYang: 0,
    },
    onSubmit: (values) => {
      const balance = { id: userId, ...values };
      updateBalance(
        { balance },
        {
          onSuccess: () => setShowModal(false),
        },
      );
    },
  });

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <Text
        tag="h2"
        text={t("add-balance")}
        fontFamily="inter"
        fontSize="xl"
        weight="500"
        color="white"
      />
      <FormikProvider value={balanceForm}>
        <Form className={styles.form}>
          <FormikInput name="balanceWon" type="number" label={t("write-won")} />
          <FormikInput
            name="balanceYang"
            type="number"
            label={t("write-yang")}
          />
          <Button
            type="submit"
            text={t("add-balance")}
            variant="base"
            className={styles.button}
          />
        </Form>
      </FormikProvider>
    </Modal>
  );
};
