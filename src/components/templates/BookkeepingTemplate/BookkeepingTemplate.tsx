import styles from "./BookkeepingTemplate.module.scss";
import { FC } from "react";
import { RevenuesValues } from "@/types/revenuesValues";
import { ExpansesValues } from "@/types/expansesValues";
import { Spinner } from "@/components/base/spinner/Spinner";
import { Charts } from "@/components/modules/Bookkeeping/Charts/Charts";

export type ResultsType = {
  revenues: {
    [key: string]: number;
  };
  expenses: {
    [key: string]: number;
  };
};

export interface BookkeepingTemplateProps {
  revenues?: RevenuesValues[];
  expenses?: ExpansesValues[];
  loading?: boolean;
  userId?: string;
  results?: ResultsType;
}

export const BookkeepingTemplate: FC<BookkeepingTemplateProps> = ({
  expenses,
  revenues,
  loading,
  userId,
  results,
  ...rest
}) => {
  if (loading) {
    return <Spinner className={styles.spinner} />;
  }

  const labels = results && Object.keys(results.revenues);

  return (
    <div className={styles.wrapper} {...rest}>
      <Charts labels={labels} data={results} />
    </div>
  );
};
