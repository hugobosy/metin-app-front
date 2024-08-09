import styles from "./Burger.module.scss";
import { ComponentPropsWithoutRef, FC, useState } from "react";
import classNames from "classnames";

export interface BurgerProps extends ComponentPropsWithoutRef<"div"> {
  setShowMobileNavigation: (showMobileNavigation: boolean) => void;
  showMobileNavigation: boolean;
}
export const Burger: FC<BurgerProps> = ({
  showMobileNavigation,
  setShowMobileNavigation,
  ...rest
}) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div
      className={styles.burger}
      onClick={() => {
        setActive((prevState) => !prevState);
        setShowMobileNavigation(!showMobileNavigation);
      }}
      {...rest}
    >
      <span className={classNames(styles.line, active && styles.active)}></span>
      <span className={classNames(styles.line, active && styles.active)}></span>
      <span className={classNames(styles.line, active && styles.active)}></span>
    </div>
  );
};
