import { useTranslations } from "next-intl";
import styles from "./MenuBalance.module.scss";
import { Text } from "@/components/base/text/Text";
import { FC } from "react";
import { MenuUserProps } from "../MenuUser";

export interface MenuBalanceProps
  extends Pick<MenuUserProps, "balanceWon" | "balanceYang"> {}

export const MenuBalance: FC<MenuBalanceProps> = ({
  balanceWon,
  balanceYang,
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
    </div>
  );
};
