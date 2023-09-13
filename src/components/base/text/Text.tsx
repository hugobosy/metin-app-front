import { FC, HTMLProps } from "react";

import styles from "./Text.module.scss";
import classNames from "classnames";

export interface TextProps extends HTMLProps<HTMLParagraphElement> {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  text?: string;
  className?: string;
  weight?: "300" | "400" | "500" | "600" | "700";
  fontSize?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export const Text: FC<TextProps> = ({
  tag,
  text,
  className,
  weight,
  fontSize,
  ...rest
}) => {
  const T = tag;

  return (
    <T
      {...rest}
      className={classNames(
        className,
        styles[`weight-${weight}`],
        styles[`size-${fontSize}`],
      )}
    >
      {text}
    </T>
  );
};
