import styles from "./BookkeepingTemplate.module.scss";
import { ComponentPropsWithoutRef, FC } from "react";
import { RevenuesValues } from "@/types/revenuesValues";
import { ExpansesValues } from "@/types/expansesValues";

export interface BookkeepingTemplateProps
  extends ComponentPropsWithoutRef<"div"> {
  revenues?: RevenuesValues[];
  expenses?: ExpansesValues[];
}

export const BookkeepingTemplate: FC<BookkeepingTemplateProps> = ({
  expenses,
  revenues,
}) => {
  return <div></div>;
};
