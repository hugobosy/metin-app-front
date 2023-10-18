import styles from "./Balance.module.scss";
import { Tile } from "@/components/base/tile/Tile";
import { useTranslations } from "next-intl";
import { Text } from "@/components/base/text/Text";
import { FC } from "react";
import { HomePageTemplateProps } from "@/components/templates/HomePageTemplate/HomePageTemplate";
import {
  calculationBookkeepingWon,
  calculationBookkeepingYang,
} from "@/utils/calculationBookkeeping";
import { Button } from "@/components/base/button/Button";

export interface BalanceProps extends HomePageTemplateProps {}

export const Balance: FC<BalanceProps> = ({ expenses, revenues }) => {
  const t = useTranslations("Dashboard.balance");

  const totalExpensesYang = calculationBookkeepingYang(expenses);
  const totalExpensesWon = calculationBookkeepingWon(expenses);

  const totalRevenuesYang = calculationBookkeepingYang(revenues);
  const totalRevenuesWon = calculationBookkeepingWon(revenues);

  return (
    <Tile className={styles.wrapper}>
      <div className={styles.header}>
        <Text
          tag="h2"
          text={t("balance")}
          color="white"
          fontFamily="montserrat"
          fontSize="xl"
          weight="500"
          className={styles["header-text"]}
        />
        <div className={styles["header-buttonGroup"]}>
          <Button
            text={t("add-revenue")}
            className={styles.button}
            variant="base"
            fontFamily="montserrat"
            weight="700"
          />
          <Button
            text={t("add-expense")}
            className={styles.button}
            variant="base"
            fontFamily="montserrat"
            weight="700"
          />
        </div>
      </div>
      <div className={styles.totals}>
        <Text
          tag="p"
          text={t("total-revenues")}
          color="white"
          fontFamily="inter"
          fontSize="md"
        />
        <div className={styles["totals-numbers"]}>
          <Text
            tag="p"
            text={String(totalRevenuesWon) + " WON"}
            color="green"
            fontFamily="inter"
            fontSize="md"
          />
          <Text
            tag="p"
            text={String(totalRevenuesYang) + " Yang"}
            color="green"
            fontFamily="inter"
            fontSize="md"
          />
        </div>
      </div>
      <div className={styles.totals}>
        <Text
          tag="p"
          text={t("total-expenses")}
          color="white"
          fontFamily="inter"
          fontSize="md"
        />
        <div className={styles["totals-numbers"]}>
          <Text
            tag="p"
            text={String(totalExpensesWon) + " WON"}
            color="red"
            fontFamily="inter"
            fontSize="md"
          />
          <Text
            tag="p"
            text={String(totalExpensesYang) + " Yang"}
            color="red"
            fontFamily="inter"
            fontSize="md"
          />
        </div>
      </div>
      <div className={styles.totals}>
        <Text
          tag="p"
          text={t("result")}
          color="white"
          fontFamily="inter"
          fontSize="md"
        />
        <div className={styles["totals-numbers"]}>
          <Text
            tag="p"
            text={Number(totalRevenuesWon) - Number(totalExpensesWon) + " WON"}
            color={
              Number(totalRevenuesWon) - Number(totalExpensesWon) >= 0
                ? Number(totalRevenuesWon) - Number(totalExpensesWon) === 0
                  ? "white"
                  : "green"
                : "red"
            }
            fontFamily="inter"
            fontSize="md"
          />
          <Text
            tag="p"
            text={
              Number(totalRevenuesYang) - Number(totalExpensesYang) + " Yang"
            }
            color={
              Number(totalRevenuesYang) - Number(totalExpensesYang) >= 0
                ? Number(totalRevenuesYang) - Number(totalExpensesYang) === 0
                  ? "white"
                  : "green"
                : "red"
            }
            fontFamily="inter"
            fontSize="md"
          />
        </div>
      </div>
    </Tile>
  );
};
