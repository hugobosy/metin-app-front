import styles from "./HomePageTemplate.module.scss";
import { Balance } from "@/components/modules/HomePage/Balance/Balance";
import { ComponentPropsWithoutRef, FC, use } from "react";
import { ExpansesValues } from "@/types/expansesValues";
import { Spinner } from "@/components/base/spinner/Spinner";
import { RevenuesValues } from "@/types/revenuesValues";
import { Objective } from "@/components/modules/HomePage/Objective/Objective";
import { ObjectiveValues } from "@/types/objectiveValues";
import { TransactionsValues } from "@/types/transactionsValues";
import { Transactions } from "@/components/modules/HomePage/Transactions/Transactions";
import { Pets } from "@/components/modules/HomePage/Pets/Pets";
import { PetsValues } from "@/types/petsValues";

export interface HomePageTemplateProps extends ComponentPropsWithoutRef<"div"> {
  expenses?: ExpansesValues[];
  revenues?: RevenuesValues[];
  objective?: ObjectiveValues[];
  loading?: boolean;
  userId?: string;
  transactions?: TransactionsValues[];
  pets?: PetsValues[];
}

export const HomePageTemplate: FC<HomePageTemplateProps> = ({
  expenses,
  revenues,
  loading,
  objective,
  userId,
  transactions,
  pets,
}) => {
  if (loading) {
    return <Spinner className={styles.spinner} />;
  }
  return (
    <div className={styles.wrapper}>
      <Balance expenses={expenses} revenues={revenues} userId={userId} />
      <Objective objective={objective} userId={userId} />
      <Transactions transactions={transactions} />
      <Pets pets={pets} />
    </div>
  );
};
