import { FC, HTMLProps, JSX } from "react";

import styles from "./Text.module.scss";
import classNames from "classnames";
import { JSXElement } from "@babel/types";

export interface TextProps extends HTMLProps<HTMLParagraphElement> {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  text?: string | JSX.Element | number;
  className?: string;
  weight?: "300" | "400" | "500" | "600" | "700";
  fontSize?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  color?: "white" | "black" | "red" | "yellow" | "gray" | "green";
  isUppercase?: boolean;
  fontFamily?: "montserrat" | "inter";
}

export const Text: FC<TextProps> = ({
  tag = "p",
  text,
  className,
  weight = "400",
  fontSize = "base",
  color = "black",
  isUppercase,
  fontFamily,
  ...rest
}) => {
  const T = tag;

  return (
    <T
      {...rest}
      className={classNames(
        className,
        styles[`weight-${weight}`],
        styles[`fontSize-${fontSize}`],
        styles[`color-${color}`],
        styles[`fontFamily-${fontFamily}`],
        isUppercase && styles.uppercase,
      )}
    >
      {text}
    </T>
  );
};
