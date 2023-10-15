import styles from "./HomePageTemplate.module.scss";
import { Balance } from "@/components/modules/HomePage/Balance/Balance";
import { ComponentPropsWithoutRef, FC } from "react";
import { ExpansesValues } from "@/types/expansesValues";
import { Spinner } from "@/components/base/spinner/Spinner";

export interface HomePageTemplateProps extends ComponentPropsWithoutRef<"div"> {
  expenses?: ExpansesValues[];
  revenues?: number;
  expensesLoading?: boolean;
}

export const HomePageTemplate: FC<HomePageTemplateProps> = ({
  expenses,
  revenues,
  expensesLoading,
}) => {
  if (expensesLoading) {
    return <Spinner className={styles.spinner} />;
  }
  return (
    <div className={styles.wrapper}>
      <Balance
        expenses={expenses}
        revenues={revenues}
        expensesLoading={expensesLoading}
      />
    </div>
  );
};
