import styles from "./Charts.module.scss";
import { Bar, Line, Chart } from "react-chartjs-2";
import "chart.js/auto";
import { FC } from "react";

export interface ChartProps<TDatasets> {
  labels: string[];
  datasets: TDatasets[];
}

export interface datasets<TData> {
  label: string;
  data: TData[];
}

export const BarChart: FC<ChartProps<datasets<string | number>>> = (
  data,
  options,
) => {
  return <Bar data={data} options={options} />;
};
