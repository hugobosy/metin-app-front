import styles from "./Form.module.scss";
import { Text } from "@/components/base/text/Text";
import { Input } from "@/components/form/input/Input";
import { Button } from "@/components/base/button/Button";
import { useTranslation } from "next-i18next";
export const Form = () => {
  return (
    <>
      <Input label="Label" />
      <Text tag="h1" text="Text" weight="300" fontSize="xxl" />
      <div>
        <Button type="button" text="text" size="lg" variant="base" />
      </div>
    </>
  );
};
