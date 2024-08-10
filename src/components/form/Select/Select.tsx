import styles from "./Select.module.scss";
import classNames from "classnames";
import { FC, SelectHTMLAttributes } from "react";
import { Text } from "@/components/base/text/Text";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options?: { name: string; id: string }[];
  label?: string;
  required?: boolean;
  errorMessage?: string;
  state?: string;
}

export const Select: FC<SelectProps> = ({
  className,
  options,
  label,
  required,
  errorMessage,
  state,
  ...rest
}) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <select className={styles.select} {...rest}>
        {options?.map((option, index) => (
          <option key={index} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
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
          fontSize="xxs"
          weight="700"
          color="red"
          fontFamily="montserrat"
          className={styles.error}
        />
      )}
    </div>
  );
};
