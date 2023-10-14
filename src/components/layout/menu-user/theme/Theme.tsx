import { Icon } from "@/components/base/icon/Icon";
import styles from "./Theme.module.scss";
import { useState } from "react";

export const Theme = () => {
  const [isLight, setIsLight] = useState(false);
  return (
    <div
      className={styles.theme}
      onClick={() => setIsLight((prevState) => !prevState)}
    >
      <Icon name={isLight ? "Moon" : "Sun"} />
    </div>
  );
};
