import styles from "./HomePageTemplate.module.scss";
import { Balance } from "@/components/modules/HomePage/Balance/Balance";
import { ComponentPropsWithoutRef, FC } from "react";
import { ExpansesValues } from "@/types/expansesValues";
import { Spinner } from "@/components/base/spinner/Spinner";
import { RevenuesValues } from "@/types/revenuesValues";
import { Objective } from "@/components/modules/HomePage/Objective/Objective";

export interface HomePageTemplateProps extends ComponentPropsWithoutRef<"div"> {
  expenses?: ExpansesValues[];
  revenues?: RevenuesValues[];
  expensesLoading?: boolean;
  revenuesLoading?: boolean;
}

export const HomePageTemplate: FC<HomePageTemplateProps> = ({
  expenses,
  revenues,
  expensesLoading,
  revenuesLoading,
}) => {
  if (expensesLoading || revenuesLoading) {
    return <Spinner className={styles.spinner} />;
  }
  return (
    <div className={styles.wrapper}>
      <Balance expenses={expenses} revenues={revenues} />
      <Objective />
    </div>
  );
};
