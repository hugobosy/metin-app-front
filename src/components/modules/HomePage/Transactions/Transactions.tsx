import styles from "./Transactions.module.scss";
import { HomePageTemplateProps } from "@/components/templates/HomePageTemplate/HomePageTemplate";
import { FC } from "react";
import { Tile } from "@/components/base/tile/Tile";
import { Text } from "@/components/base/text/Text";
import { useTranslations } from "next-intl";

export interface TransactionsProps
  extends Pick<HomePageTemplateProps, "transactions"> {}
export const Transactions: FC<TransactionsProps> = ({ transactions }) => {
  const t = useTranslations("Dashboard.transactions");
  return (
    <Tile className={styles.wrapper}>
      <Text
        tag="h2"
        text={t("last-transactions")}
        color="white"
        fontFamily="montserrat"
        fontSize="xl"
        weight="500"
        className={styles["header-text"]}
      />
    </Tile>
  );
};
