import styles from "./Charts.module.scss";
import {
  BarChart,
  CircleChart,
  LineChart,
} from "@/components/base/Charts/Charts";
import { FC } from "react";

export interface ChartsProps {
  labels?: string[];
  data: {
    label: string;
    data?: number[];
  }[];
  type?: "BarChart" | "LineChart" | "CircleChart";
}

export const Charts: FC<ChartsProps> = ({
  labels,
  data,
  type = "BarChart",
}) => {
  switch (type) {
    case "BarChart":
      return (
        <div className={styles.wrapper}>
          <BarChart
            labels={labels}
            datasets={data.map((item) => {
              return { label: item.label, data: item.data };
            })}
          />
        </div>
      );
    case "LineChart":
      return (
        <div className={styles.wrapper}>
          <LineChart
            labels={labels}
            datasets={data.map((item) => {
              return { label: item.label, data: item.data };
            })}
          />
        </div>
      );

    case "CircleChart":
      return (
        <div className={styles.wrapper}>
          <CircleChart
            labels={labels}
            datasets={data.map((item) => {
              return { label: item.label, data: item.data };
            })}
          />
        </div>
      );
  }
};
