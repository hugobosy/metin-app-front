import styles from "./Balance.module.scss";
import { Tile } from "@/components/base/tile/Tile";
import { useTranslations } from "next-intl";
import { Text } from "@/components/base/text/Text";
import { FC } from "react";
import { HomePageTemplateProps } from "@/components/templates/HomePageTemplate/HomePageTemplate";

export interface BalanceProps extends HomePageTemplateProps {}

export const Balance: FC<BalanceProps> = ({ expenses, revenues }) => {
  const t = useTranslations("Dashboard.balance");
  const totalExpensesYang = expenses
    ?.map((expenses) =>
      [expenses.count, expenses.priceYang].reduce(
        (prev, curr) => prev * curr,
        1,
      ),
    )
    .reduce((prev, curr) => prev + curr, 0);

  const totalExpensesWon = expenses
    ?.map((expenses) =>
      [expenses.count, expenses.priceWon].reduce(
        (prev, curr) => prev * curr,
        1,
      ),
    )
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <Tile className={styles.wrapper}>
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
        />
        <div>
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
        <div>
          <Text
            tag="p"
            text={String(Number(revenues) - Number(totalExpensesWon)) + " WON"}
            color={
              Number(revenues) - Number(totalExpensesWon) >= 0
                ? Number(revenues) - Number(totalExpensesWon) === 0
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
              String(Number(revenues) - Number(totalExpensesYang)) + " Yang"
            }
            color={
              Number(revenues) - Number(totalExpensesYang) >= 0
                ? Number(revenues) - Number(totalExpensesYang) === 0
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
