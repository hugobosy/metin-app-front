import styles from "./Spinner.module.scss";
import { ComponentPropsWithoutRef, FC } from "react";
import classNames from "classnames";

export interface SpinnerProps extends ComponentPropsWithoutRef<"div"> {}
export const Spinner: FC<SpinnerProps> = ({ className }) => {
  return (
    <div className={classNames(styles["lds-roller"], className)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
