import { useTranslations } from "next-intl";
import styles from "./MenuBalance.module.scss";
import { Text } from "@/components/base/text/Text";
import { FC } from "react";
import { MenuUserProps } from "../MenuUser";
import { Button } from "@/components/base/button/Button";

export interface MenuBalanceProps
  extends Pick<MenuUserProps, "balanceWon" | "balanceYang"> {}

export const MenuBalance: FC<MenuBalanceProps> = ({
  balanceWon,
  balanceYang,
}) => {
  const t = useTranslations("Layout.balance");
  if (balanceWon && balanceYang) {
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
      </div>
    );
  }

  return (
    <Button
      variant="base"
      text={t("add-balance")}
      fontFamily="montserrat"
      weight="700"
      className={styles.button}
    />
  );
};
