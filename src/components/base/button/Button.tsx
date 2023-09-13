import styles from "./Button.module.scss";
import { FC, HTMLAttributes } from "react";

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  text?: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
}
export const Button: FC<ButtonProps> = ({
  href,
  type,
  text,
  disabled,
  ...rest
}) => {
  return (
    <button type={type} {...rest}>
      haha
    </button>
  );
};
