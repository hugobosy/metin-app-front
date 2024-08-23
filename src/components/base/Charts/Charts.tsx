import { Bar, Line, Chart, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { ComponentProps, FC } from "react";
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

export interface ChartProps<TDatasets, TLabel> extends ComponentProps<"div"> {
  labels?: TLabel;
  datasets: TDatasets[];
}

export interface datasets<TData> {
  label: string;
  data: TData | undefined;
}

export const BarChart: FC<
  ChartProps<datasets<(string | number)[]>, string[] | undefined[]>
> = (data, options, ...rest) => {
  return <Bar data={data} options={options} {...rest} />;
};
export const LineChart: FC<
  ChartProps<datasets<(string | number)[]>, string[] | undefined[]>
> = (data, options, ...rest) => {
  return <Line data={data} options={options} {...rest} />;
};
export const CircleChart: FC<
  ChartProps<datasets<(string | number)[]>, string[] | undefined[]>
> = (data, options, ...rest) => {
  return <Doughnut data={data} options={options} {...rest} />;
};
