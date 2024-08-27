import styles from "@/components/templates/BookkeepingTemplate/BookkeepingTemplate.module.scss";
import { Charts } from "@/components/modules/Bookkeeping/ChartsModule/Charts/Charts";
import { FC } from "react";
import { ResultsType } from "@/components/templates/BookkeepingTemplate/BookkeepingTemplate";

export interface ChartsModuleProps {
  results?: ResultsType;
}

export const ChartsModule: FC<ChartsModuleProps> = ({ results, ...rest }) => {
  const labels = results && Object.keys(results.revenues);
  const dataResults = [
    {
      label: "Moje wydatki",
      data: results ? Object.values(results.expenses) : [0],
    },
    {
      label: "Moje przychody",
      data: results ? Object.values(results.revenues) : [0],
    },
  ];

  return (
    <div className={styles.wrapper} {...rest}>
      <Charts labels={labels} data={dataResults} type="BarChart" />
      <Charts labels={labels} data={dataResults} type="LineChart" />
    </div>
  );
};
