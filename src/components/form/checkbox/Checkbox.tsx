import type { ComponentPropsWithRef } from "react";
import React from "react";

import classNames from "classnames";

import styles from "./Checkbox.module.scss";
import { Text } from "@/components/base/text/Text";

export interface CheckboxProps extends ComponentPropsWithRef<"input"> {
  label?: string;
  color?: "yellow" | "red" | "green";
  message?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  color = "green",
  className,
  message,
  ...rest
}) => {
  return (
    <label
      className={classNames(
        styles["checkbox-wrapper"],
        styles[color],
        className,
      )}
    >
      <input {...rest} type="checkbox" className={styles["inp-cbx"]} />
      <div className={styles["cbx"]}>
        <span className={styles.icon}>
          <svg width="12px" height="10px">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span className={styles.label}>{label}</span>
      </div>
      {message && (
        <Text
          tag="span"
          text={message}
          className={styles.validateErrorMessage}
        />
      )}
    </label>
  );
};
