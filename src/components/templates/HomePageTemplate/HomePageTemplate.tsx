import styles from "./HomePageTemplate.module.scss";
import { Balance } from "@/components/modules/HomePage/Balance/Balance";
import { ComponentPropsWithoutRef, FC } from "react";
import { ExpansesValues } from "@/types/expansesValues";

export interface HomePageTemplateProps extends ComponentPropsWithoutRef<"div"> {
  expenses: ExpansesValues[];
  revenues: number;
}

export const HomePageTemplate: FC<HomePageTemplateProps> = ({
  expenses,
  revenues,
}) => {
  return (
    <div className={styles.wrapper}>
      <Balance expenses={expenses} revenues={revenues} />
    </div>
  );
};
