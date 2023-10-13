import styles from "./MenuLanguage.module.scss";
import { Button } from "@/components/base/button/Button";
import { Icon } from "@/components/base/icon/Icon";
export const MenuLanguage = () => {
  return (
    <ul>
      <li>
        <Button type="button" text="English" icon="England" href="en" />
      </li>
    </ul>
  );
};
