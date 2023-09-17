import styles from "./Button.module.scss";
import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import Link from "next/link";

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  text?: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "danger" | "success" | "base";
  size?: "sm" | "md" | "lg";
  fontSize?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  fontFamily?: "montserrat" | "inter";
  fontColor?: "black";
  weight?: "300" | "400" | "500" | "600" | "700";
}
export const Button: FC<ButtonProps> = ({
  href,
  type,
  text,
  disabled,
  className,
  variant,
  size,
  fontSize,
  fontFamily,
  fontColor,
  weight = "400",
  ...rest
}) => {
  const classes = classNames(
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    styles[`fontSize-${fontSize}`],
    styles[`fontFamily-${fontFamily}`],
    styles[`fontColor-${fontColor}`],
    styles[`weight-${weight}`],
  );

  const commonProps = {
    className: classes,
  };

  if (href) {
    return (
      <Link href={href} {...commonProps} {...rest}>
        {text}
      </Link>
    );
  }
  return (
    <button type={type} {...commonProps} {...rest} disabled={disabled}>
      {text}
    </button>
  );
};
