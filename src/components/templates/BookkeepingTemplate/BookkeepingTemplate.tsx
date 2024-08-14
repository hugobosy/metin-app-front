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

export const BookkeepingTemplate: FC<BookkeepingTemplateProps> = ({
  expenses,
  revenues,
  loading,
  ...rest
}) => {
  if (loading) {
    return <Spinner className={styles.spinner} />;
  }
  return (
    <div className={styles.wrapper} {...rest}>
      <div className={styles.charts}>
        <BarChart
          labels={["styczeń", "luty", "marzec"]}
          datasets={[{ label: "Moj czort", data: [25, 65, 45] }]}
        />
      </div>
    </div>
  );
};
