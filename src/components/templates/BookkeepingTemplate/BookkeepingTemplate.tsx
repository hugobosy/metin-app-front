import styles from "./BookkeepingTemplate.module.scss";
import { ComponentPropsWithoutRef, FC } from "react";
import { RevenuesValues } from "@/types/revenuesValues";
import { ExpansesValues } from "@/types/expansesValues";
import { Spinner } from "@/components/base/spinner/Spinner";

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
}) => {
  if (loading) {
    return <Spinner className={styles.spinner} />;
  }
  return <div></div>;
};
