import styles from "./Balance.module.scss";
import { Tile } from "@/components/base/tile/Tile";
import { useTranslations } from "next-intl";
import { Text } from "@/components/base/text/Text";
import { FC } from "react";
import { HomePageTemplateProps } from "@/components/templates/HomePageTemplate/HomePageTemplate";

export interface BalanceProps extends HomePageTemplateProps {}

export const Balance: FC<BalanceProps> = ({ expenses, revenues }) => {
  const t = useTranslations("Dashboard.balance");
  const totalExpenses = expenses
    .map((expenses) =>
      [expenses.count, expenses.price].reduce((prev, curr) => prev * curr, 1),
    )
    .reduce((prev, curr) => prev + curr, 0);
  return (
    <Tile>
      <Text
        tag="h2"
        text={t("balance")}
        color="white"
        fontFamily="montserrat"
        fontSize="xl"
        weight="500"
        className={styles.header}
      />
      <div className={styles.totals}>
        <Text
          tag="p"
          text={t("total-expenses")}
          color="white"
          fontFamily="inter"
          fontSize="md"
        />{" "}
        <Text
          tag="p"
          text={String(totalExpenses)}
          color="red"
          fontFamily="inter"
          fontSize="md"
        />
      </div>
      <div className={styles.totals}>
        <Text
          tag="p"
          text={t("total-revenues")}
          color="white"
          fontFamily="inter"
          fontSize="md"
        />
        <Text
          tag="p"
          text={String(revenues)}
          color="green"
          fontFamily="inter"
          fontSize="md"
        />
      </div>
      <div className={styles.totals}>
        <Text
          tag="p"
          text={t("result")}
          color="white"
          fontFamily="inter"
          fontSize="md"
        />
        <Text
          tag="p"
          text={String(revenues - totalExpenses)}
          color={
            revenues - totalExpenses < 0
              ? "red"
              : revenues - totalExpenses === 0
              ? "white"
              : "green"
          }
          fontFamily="inter"
          fontSize="md"
        />
      </div>
    </Tile>
  );
};
