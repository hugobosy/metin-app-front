import styles from "./Charts.module.scss";
import { BarChart } from "@/components/base/Charts/Charts";
import { ComponentPropsWithoutRef, FC } from "react";
import { ResultsType } from "@/components/templates/BookkeepingTemplate/BookkeepingTemplate";

export interface ChartsProps extends ComponentPropsWithoutRef<"div"> {
  labels?: string[];
  data?: ResultsType;
}

export const Charts: FC<ChartsProps> = ({ labels, data }) => {
  return (
    <div className={styles.wrapper}>
      <BarChart
        labels={labels}
        datasets={[
          {
            label: "Moje wydatki",
            data: data ? Object.values(data.expenses) : [0],
          },
          {
            label: "Moje przychody",
            data: data ? Object.values(data.revenues) : [0],
          },
        ]}
      />
    </div>
  );
};
