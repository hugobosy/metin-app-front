import styles from "./BookkeepingTemplate.module.scss";
import { ComponentPropsWithoutRef, FC } from "react";
import { RevenuesValues } from "@/types/revenuesValues";
import { ExpansesValues } from "@/types/expansesValues";
import { Spinner } from "@/components/base/spinner/Spinner";
import { BarChart } from "@/components/modules/Bookkeeping/Charts/Charts";

export interface BookkeepingTemplateProps
  extends ComponentPropsWithoutRef<"div"> {
  revenues?: RevenuesValues[];
  expenses?: ExpansesValues[];
  loading?: boolean;
}

export type Month =
  | "Styczeń"
  | "Luty"
  | "Marzec"
  | "Kwiecień"
  | "Maj"
  | "Czerwiec"
  | "Lipiec"
  | "Sierpień"
  | "Wrzesień"
  | "Październik"
  | "Listopad"
  | "Grudzień"
  | undefined;

export const BookkeepingTemplate: FC<BookkeepingTemplateProps> = ({
  expenses,
  revenues,
  loading,
  ...rest
}) => {
  if (loading) {
    return <Spinner className={styles.spinner} />;
  }

  const getMonth = (data: number): Month => {
    switch (data) {
      case 1:
        return "Styczeń";
      case 2:
        return "Luty";
      case 3:
        return "Marzec";
      case 4:
        return "Kwiecień";
      case 5:
        return "Maj";
      case 6:
        return "Czerwiec";
      case 7:
        return "Lipiec";
      case 8:
        return "Sierpień";
      case 9:
        return "Wrzesień";
      case 10:
        return "Październik";
      case 11:
        return "Listopad";
      case 12:
        return "Grudzień";
    }
  };

  return (
    <div className={styles.wrapper} {...rest}>
      <div className={styles.charts}>
        <BarChart
          labels={expenses?.map((rev) =>
            getMonth(new Date(rev.createdAt).getMonth()),
          )}
          datasets={[
            {
              label: "Moje wydatki",
              data: revenues?.map((rev) => rev.priceYang),
            },
          ]}
        />
      </div>
    </div>
  );
};
