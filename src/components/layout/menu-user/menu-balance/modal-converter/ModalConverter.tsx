import { Modal, ModalProps } from "@/components/base/modal/Modal";
import { Component, FC, useEffect, useState } from "react";
import { Button } from "@/components/base/button/Button";
import { useTranslations } from "next-intl";

import styles from "./ModalConverter.module.scss";
import { Text } from "@/components/base/text/Text";
import { Form, FormikProvider, useFormik } from "formik";
import { FormikInput } from "@/components/form/formikInput/FormikInput";
import classNames from "classnames";
import { useConvertWonToYang } from "@/hooks/mutations/useConvertWonToYang";
import { useConvertYangToWon } from "@/hooks/mutations/useConvertYangToWon";

export interface ModalConverterProps extends ModalProps {
  userId?: string;
  balanceWon?: number;
  balanceYang?: number;
}

type ConverterType = "yangToWon" | "wonToYang" | null;

export const ModalConverter: FC<ModalConverterProps> = ({
  showModal,
  setShowModal,
  userId,
  balanceWon,
  balanceYang,
}) => {
  const [converter, setConverter] = useState<ConverterType>(null);

  const { mutate: convertWonToYang, isLoading: convertWonToYangLoading } =
    useConvertWonToYang();
  const { mutate: convertYangToWon, isLoading: convertYangToWonLoading } =
    useConvertYangToWon();

  useEffect(() => {
    !showModal && setConverter(null);
  }, [showModal]);

  const t = useTranslations("Layout.converter");

  const wonToYang = useFormik({
    initialValues: {
      id: userId,
      won: 0,
    },
    onSubmit: (values) =>
      convertWonToYang(values, {
        onSuccess: () => {
          setShowModal(false);
          location.reload();
        },
      }),
  });

  const yangToWon = useFormik({
    initialValues: {
      id: userId,
      won: 0,
    },
    onSubmit: (values) =>
      convertYangToWon(values, {
        onSuccess: () => {
          setShowModal(false);
          location.reload();
        },
      }),
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
