import { useTranslations } from "next-intl";
import styles from "./MenuBalance.module.scss";
import { Text } from "@/components/base/text/Text";
import { FC } from "react";
import { MenuUserProps } from "../MenuUser";
import { Button } from "@/components/base/button/Button";
import { Spinner } from "@/components/base/spinner/Spinner";
import Cookies from "universal-cookie";

export interface MenuBalanceProps
  extends Pick<MenuUserProps, "balanceWon" | "balanceYang"> {
  setShowModal: (showModal: boolean) => void;
  isLoadingUpdateBalance: boolean;
  setTypeModal: (typeModal: "balance" | "converter") => void;
}

export const MenuBalance: FC<MenuBalanceProps> = ({
  balanceWon,
  balanceYang,
  setShowModal,
  setTypeModal,
}) => {
  const t = useTranslations("Layout.balance");

  return (
    <div className={styles.wrapper}>
      <Text
        tag="span"
        fontFamily="montserrat"
        fontSize="md"
        color="white"
        text={t("your-balance")}
      />
      <Text
        tag="span"
        fontFamily="montserrat"
        fontSize="md"
        color="white"
        text={
          balanceWon === undefined
            ? "Won: "
            : "Won: " + balanceWon.toLocaleString()
        }
      />
      <Text
        tag="span"
        fontFamily="montserrat"
        fontSize="md"
        color="white"
        text={
          balanceYang === undefined
            ? "Yang:"
            : "Yang: " + balanceYang.toLocaleString()
        }
      />
      <Button
        text={t("update-balance")}
        variant="base"
        weight="700"
        fontFamily="montserrat"
        className={styles.button}
        onClick={() => {
          setTypeModal("balance");
          setShowModal(true);
        }}
      />{" "}
      <Button
        text={t("converter")}
        variant="base"
        weight="700"
        fontFamily="montserrat"
        className={styles.button}
        onClick={() => {
          setTypeModal("converter");
          setShowModal(true);
        }}
      />
    </div>
  );
};
