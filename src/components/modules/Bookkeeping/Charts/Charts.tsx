import styles from "./Charts.module.scss";
import { Bar, Line, Chart } from "react-chartjs-2";
import "chart.js/auto";
import { FC } from "react";
import { Month } from "@/components/templates/BookkeepingTemplate/BookkeepingTemplate";

export interface ChartProps<TDatasets, TLabel> {
  labels?: TLabel;
  datasets: TDatasets[];
}

export interface datasets<TData> {
  label: string;
  data: TData | undefined;
}

export const BarChart: FC<
  ChartProps<datasets<string[] | number[]>, string[] | undefined[] | Month[]>
> = (data, options) => {
  return <Bar data={data} options={options} />;
};
