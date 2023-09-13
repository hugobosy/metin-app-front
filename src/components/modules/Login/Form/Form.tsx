import styles from "./Form.module.scss";
import { Text } from "@/components/base/text/Text";
import { Input } from "@/components/form/input/Input";
export const Form = () => {
  return (
    <>
      <Input label="Label" />
      <Text tag="h1" text="Text" weight="300" fontSize="xxl" />
    </>
  );
};
