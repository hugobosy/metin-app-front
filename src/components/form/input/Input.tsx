import styles from "./Input.module.scss";
import classNames from "classnames";
import { FC, InputHTMLAttributes } from "react";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  classname?: string;
  label?: string;
  required?: boolean;
  errorMessage?: string;
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
      {label && (
        <div className={styles.label}>
          <label htmlFor={rest.name} className={styles.label}>
            {label}
          </label>
        </div>
      )}
      <div className={styles.inputWrapper}>
        <input
          {...rest}
          required={required}
          className={classNames(styles.input, classname)}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
};
