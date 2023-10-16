import styles from "./HomePageTemplate.module.scss";
import { Balance } from "@/components/modules/HomePage/Balance/Balance";
import { ComponentPropsWithoutRef, FC } from "react";
import { ExpansesValues } from "@/types/expansesValues";
import { Spinner } from "@/components/base/spinner/Spinner";
import { RevenuesValues } from "@/types/revenuesValues";
import { Objective } from "@/components/modules/HomePage/Objective/Objective";
import { ObjectiveValues } from "@/types/objectiveValues";

export interface HomePageTemplateProps extends ComponentPropsWithoutRef<"div"> {
  expenses?: ExpansesValues[];
  revenues?: RevenuesValues[];
  objective?: ObjectiveValues[];
  loading?: boolean;
}

export const HomePageTemplate: FC<HomePageTemplateProps> = ({
  expenses,
  revenues,
  loading,
  objective,
}) => {
  if (loading) {
    return <Spinner className={styles.spinner} />;
  }
  return (
    <div className={styles.wrapper}>
      <Balance expenses={expenses} revenues={revenues} />
      <Objective objective={objective} />
    </div>
  );
};
