import styles from "./Input.module.scss";
import classNames from "classnames";
import { FC, InputHTMLAttributes } from "react";
import { Text } from "@/components/base/text/Text";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  classname?: string;
  label?: string;
  required?: boolean;
  errorMessage?: string;
  state?: string;
}

export const Input: FC<InputProps> = ({
  classname,
  label,
  required,
  errorMessage,
  ...rest
}) => {
  return (
    <div className={classNames(styles.wrapper, classname)}>
      <input
        {...rest}
        required={required}
        className={classNames(styles.input, classname)}
      />
      {label && (
        <label htmlFor={rest.name} className={styles.label}>
          <Text
            tag="span"
            text={label}
            weight="500"
            fontSize="sm"
            color="white"
            fontFamily="montserrat"
          />
        </label>
      )}
      {errorMessage && (
        <Text
          tag="p"
          text={errorMessage}
          fontSize="xs"
          weight="700"
          color="red"
          fontFamily="montserrat"
          className={styles.error}
        />
      )}
    </div>
  );
};
