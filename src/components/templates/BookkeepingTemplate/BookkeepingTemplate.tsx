import styles from "./BookkeepingTemplate.module.scss";
import { ComponentPropsWithoutRef, FC, useState } from "react";
import { RevenuesValues } from "@/types/revenuesValues";
import { ExpansesValues } from "@/types/expansesValues";
import { Spinner } from "@/components/base/spinner/Spinner";
import { BarChart } from "@/components/modules/Bookkeeping/Charts/Charts";
import { useGetTransactionsResults } from "@/hooks/queries/useGetTransactionsResults";

export interface BookkeepingTemplateProps
  extends ComponentPropsWithoutRef<"div"> {
  revenues?: RevenuesValues[];
  expenses?: ExpansesValues[];
  loading?: boolean;
  userId?: string;
}

export const BookkeepingTemplate: FC<BookkeepingTemplateProps> = ({
  expenses,
  revenues,
  loading,
  userId,
  ...rest
}) => {
  if (loading) {
    return <Spinner className={styles.spinner} />;
  }

  const [by, setBy] = useState<"day" | "month" | "year">("year");

  const { data, isLoading } = useGetTransactionsResults(userId, by);

  return (
    <div className={styles.wrapper} {...rest}>
      <div className={styles.charts}>
        <BarChart
          labels={data?.data.revenues}
          datasets={[
            {
              label: "Moje wydatki",
              data: data?.data.revenues.map((revenue: any) => revenue["2024"]),
            },
          ]}
        />
      </div>
    </div>
  );
};
