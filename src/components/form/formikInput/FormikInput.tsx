import { type FC } from "react";

import { useField } from "formik";
import { Input, InputProps } from "@/components/form/input/Input";

export interface FormikInputProps
  extends Omit<InputProps, "value" | "onChange" | "message" | "state"> {
  name: string;
}

export const FormikInput: FC<FormikInputProps> = ({ name, ...props }) => {
  const [input, meta] = useField(name);

  const hasError = meta.touched && !!meta.error;

  return (
    <Input
      {...props}
      {...input}
      state={hasError ? "error" : "default"}
      errorMessage={hasError ? meta.error : undefined}
    />
  );
};
