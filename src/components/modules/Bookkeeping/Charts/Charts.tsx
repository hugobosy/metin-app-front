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
        <BarChart
          labels={labels}
          datasets={data.map((item) => {
            return { label: item.label, data: item.data };
          })}
        />
      );
    case "LineChart":
      return (
        <LineChart
          labels={labels}
          datasets={data.map((item) => {
            return { label: item.label, data: item.data };
          })}
        />
      );

    case "CircleChart":
      return (
        <CircleChart
          labels={labels}
          datasets={data.map((item) => {
            return { label: item.label, data: item.data };
          })}
        />
      );
  }
};
