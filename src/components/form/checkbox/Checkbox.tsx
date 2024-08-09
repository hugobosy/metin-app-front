import type { ComponentPropsWithRef } from "react";
import React from "react";

import classNames from "classnames";

import styles from "./Checkbox.module.scss";
import { Text } from "@/components/base/text/Text";
import { Button } from "@/components/base/button/Button";

export interface CheckboxProps extends ComponentPropsWithRef<"input"> {
  label?: string;
  color?: "yellow" | "red" | "green" | "blue";
  message?: string;
  link?: {
    text: string;
    href: string;
  };
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  color = "green",
  className,
  message,
  link,
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
        <Text
          tag="p"
          fontFamily="inter"
          fontSize="xs"
          color="white"
          className={styles.label}
        >
          {label}{" "}
          {link && (
            <Button
              href={link.href}
              text={link.text}
              fontColor="blue"
              weight="600"
              fontSize="xs"
              fontFamily="inter"
            />
          )}
        </Text>
      </div>
      {message && (
        <Text
          tag="span"
          text={message}
          className={styles.error}
          fontSize="xxs"
          color="red"
          fontFamily="montserrat"
        />
      )}
    </label>
  );
};
