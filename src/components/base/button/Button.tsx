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
}
export const Button: FC<ButtonProps> = ({
  href,
  type,
  text,
  disabled,
  className,
  variant,
  size,
  ...rest
}) => {
  const classes = classNames(
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
  );

  const commonProps = {
    className: classes,
  };

  if (href) {
    return (
      <Link href={href} {...commonProps}>
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
