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

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columnHelper = createColumnHelper<TransactionsValues>();

export const Transactions: FC<TransactionsProps> = ({ transactions }) => {
  const t = useTranslations("Dashboard.transactions");
  console.log(transactions);

  const columns = [
    columnHelper.accessor("item", {
      header: () => <Text tag="span" text="Sprzedany przedmiot" />,
      cell: (cell) => cell.getValue(),
    }),
    columnHelper.accessor("count", {
      header: () => <Text tag="span" text="Ilość" />,
      cell: (cell) => console.log(cell.getValue()),
    }),
    columnHelper.accessor("priceWon", {
      header: () => <Text tag="span" text="Cena WON" />,
      cell: (cell) => <Text tag="span" text={cell.getValue()} />,
    }),
    columnHelper.accessor("priceYang", {
      header: () => <Text tag="span" text="Cena YANG" />,
      cell: (cell) => <Text tag="span" text={cell.getValue()} />,
    }),
    columnHelper.accessor("createdAt", {
      header: () => <Text tag="span" text="Data transakcji" />,
      cell: (cell) => {
        console.log(cell);
        return (
          <Text
            tag="span"
            text={new Date(cell.row.original.createdAt).toLocaleDateString()}
          />
        );
      },
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
      <Table columns={columns} data={transactions} />
    </Tile>
  );
};
