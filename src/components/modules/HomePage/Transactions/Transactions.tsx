import styles from "./Transactions.module.scss";
import { HomePageTemplateProps } from "@/components/templates/HomePageTemplate/HomePageTemplate";
import { FC, useMemo } from "react";
import { Tile } from "@/components/base/tile/Tile";
import { Text } from "@/components/base/text/Text";
import { useTranslations } from "next-intl";
import { Table } from "@/components/base/table/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { TransactionsValues } from "@/types/transactionsValues";

export interface TransactionsProps
  extends Pick<HomePageTemplateProps, "transactions"> {}

const columnHelper = createColumnHelper<TransactionsValues>();

export const Transactions: FC<TransactionsProps> = ({ transactions }) => {
  const t = useTranslations("Dashboard.transactions");

  const lastTransactions = (
    data?: TransactionsValues[],
  ): TransactionsValues[] | undefined => {
    const lastData = [];
    for (let i = 0; i < 5; i++) {
      lastData.push(data && data[i]);
    }

    // @ts-ignore
    return lastData;
  };
  function changeColor(type: "revenues" | "expenses") {
    if (type === "revenues") {
      return "green";
    } else {
      return "red";
    }
  }

  function getType(type: "revenues" | "expenses") {
    if (type === "revenues") {
      return "Przychód";
    } else {
      return "Wydatek";
    }
  }

  const columns = [
    columnHelper.accessor("item", {
      header: () => (
        <Text
          tag="span"
          text="Sprzedany przedmiot"
          fontFamily="inter"
          fontSize="md"
          color="gray"
          weight="500"
        />
      ),
      cell: (cell) => (
        <Text
          tag="span"
          text={cell.getValue()}
          fontFamily="montserrat"
          color="gray"
          fontSize="sm"
        />
      ),
    }),
    columnHelper.accessor("count", {
      header: () => (
        <Text
          tag="span"
          text="Ilość"
          fontFamily="inter"
          fontSize="md"
          color="gray"
          weight="500"
        />
      ),
      cell: (cell) => (
        <Text
          tag="span"
          text={cell.getValue()}
          fontFamily="montserrat"
          color="gray"
          fontSize="sm"
        />
      ),
    }),
    columnHelper.accessor("priceWon", {
      header: () => (
        <Text
          tag="span"
          text="Cena WON"
          fontFamily="inter"
          fontSize="md"
          color="gray"
          weight="500"
        />
      ),
      cell: (cell) => (
        <Text
          tag="span"
          text={cell.getValue()}
          fontFamily="montserrat"
          color="gray"
          fontSize="sm"
        />
      ),
    }),
    columnHelper.accessor("priceYang", {
      header: () => (
        <Text
          tag="span"
          text="Cena YANG"
          fontFamily="inter"
          fontSize="md"
          color="gray"
          weight="500"
        />
      ),
      cell: (cell) => (
        <Text
          tag="span"
          text={cell.getValue().toLocaleString()}
          fontFamily="montserrat"
          color="gray"
          fontSize="sm"
        />
      ),
    }),
    columnHelper.accessor("sum", {
      header: () => (
        <Text
          tag="span"
          text="Całkowita suma"
          fontFamily="inter"
          fontSize="md"
          color="gray"
          weight="500"
        />
      ),
      cell: (cell) => (
        <Text
          tag="span"
          text={`${(
            cell.row.original.priceWon * cell.row.original.count
          ).toLocaleString()} WON \n ${(
            cell.row.original.priceYang * cell.row.original.count
          ).toLocaleString()} YANG`}
          fontFamily="montserrat"
          color="gray"
          fontSize="sm"
        />
      ),
    }),
    columnHelper.accessor("createdAt", {
      header: () => (
        <Text
          tag="span"
          text="Data transakcji"
          fontFamily="inter"
          fontSize="md"
          color="gray"
          weight="500"
        />
      ),
      cell: (cell) => {
        return (
          <Text
            tag="span"
            text={new Date(cell.getValue()).toLocaleDateString()}
            fontFamily="montserrat"
            color="gray"
            fontSize="sm"
          />
        );
      },
    }),
    columnHelper.accessor("type", {
      header: () => (
        <Text
          tag="span"
          text="Przychód/wydatek"
          fontFamily="inter"
          fontSize="md"
          color="gray"
          weight="500"
        />
      ),
      cell: (cell) => (
        <Text
          tag="span"
          text={getType(cell.getValue())}
          fontFamily="montserrat"
          color={changeColor(cell.getValue())}
          fontSize="sm"
        />
      ),
    }),
  ];

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
      <Table columns={columns} data={lastTransactions(transactions)} />
    </Tile>
  );
};
