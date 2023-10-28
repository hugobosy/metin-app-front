import { Modal, ModalProps } from "@/components/base/modal/Modal";
import { FC, useEffect, useState } from "react";
import { Button } from "@/components/base/button/Button";
import { useTranslations } from "next-intl";

import styles from "./ModalConverter.module.scss";
import { Text } from "@/components/base/text/Text";
import { Form, FormikProvider, useFormik } from "formik";
import { FormikInput } from "@/components/form/formikInput/FormikInput";
import classNames from "classnames";

export interface ModalConverterProps extends ModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

type ConverterType = "yangToWon" | "wonToYang" | null;

export const ModalConverter: FC<ModalConverterProps> = ({
  showModal,
  setShowModal,
}) => {
  const [converter, setConverter] = useState<ConverterType>(null);

  useEffect(() => {
    !showModal && setConverter(null);
  }, [showModal]);

  const t = useTranslations("Layout.converter");

  const wonToYang = useFormik({
    initialValues: {
      id: "",
      won: 0,
    },
    onSubmit: (values) => console.log(values),
  });

  const yangToWon = useFormik({
    initialValues: {
      id: "",
      yang: 0,
    },
    onSubmit: (values) => console.log(values),
  });

  if (converter === null) {
    return (
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div>
          <Button
            text={t("convert-yang-to-won")}
            variant="base"
            weight="700"
            fontFamily="montserrat"
            fontSize="lg"
            className={styles.button}
            onClick={() => setConverter("yangToWon")}
          />
          <Button
            text={t("convert-won-to-yang")}
            variant="base"
            weight="700"
            fontFamily="montserrat"
            fontSize="lg"
            className={styles.button}
            onClick={() => setConverter("wonToYang")}
          />
        </div>
      </Modal>
    );
  }

  if (converter === "wonToYang") {
    return (
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Text
          tag="h2"
          text={t("convert-won-to-yang")}
          fontFamily="inter"
          fontSize="xl"
          weight="500"
          color="white"
        />
        <FormikProvider value={wonToYang}>
          <Form className={styles.form}>
            <FormikInput
              name="won"
              label={t("enter-the-quantity-won-to-convert-yang")}
              type="number"
            />
            <Button
              text={t("convert-won-to-yang")}
              variant="base"
              className={classNames(styles.button, styles["button-submit"])}
            />
          </Form>
        </FormikProvider>
      </Modal>
    );
  }

  if (converter === "yangToWon") {
    return (
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <Text
          tag="h2"
          text={t("convert-yang-to-won")}
          fontFamily="inter"
          fontSize="xl"
          weight="500"
          color="white"
        />
        <FormikProvider value={yangToWon}>
          <Form className={styles.form}>
            <FormikInput
              name="won"
              label={t("enter-the-quantity-won-to-convert-from-yang")}
              type="number"
            />
            <Button
              text={t("convert-yang-to-won")}
              variant="base"
              className={classNames(styles.button, styles["button-submit"])}
            />
          </Form>
        </FormikProvider>
      </Modal>
    );
  }
};
