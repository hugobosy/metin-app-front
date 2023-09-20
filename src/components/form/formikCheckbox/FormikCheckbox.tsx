import { type FC } from "react";

import { useField } from "formik";
import { Checkbox, CheckboxProps } from "@/components/form/checkbox/Checkbox";

export interface FormikCheckboxProps
  extends Omit<CheckboxProps, "value" | "onChange" | "message" | "state"> {
  name: string;
}

export const FormikCheckbox: FC<FormikCheckboxProps> = ({ name, ...props }) => {
  const [input, meta] = useField<boolean>(name);

  return (
    <Checkbox
      {...props}
      {...input}
      value={name}
      checked={input.value}
      message={meta.error}
    />
  );
};
