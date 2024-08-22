import styles from "./Charts.module.scss";
import { Bar, Line, Chart } from "react-chartjs-2";
import "chart.js/auto";
import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export interface ChartProps<TDatasets, TLabel> {
  labels?: TLabel;
  datasets: TDatasets[];
}

export interface datasets<TData> {
  label: string;
  data: TData | undefined;
}

export const BarChart: FC<
  ChartProps<datasets<(string | number)[]>, string[] | undefined[]>
> = (data, options) => {
  return <Bar data={data} options={options} />;
};
