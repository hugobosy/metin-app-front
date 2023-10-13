import styles from "./MenuUser.module.scss";
import { Tile } from "@/components/base/tile/Tile";
import { FC } from "react";
import { LayoutProps } from "@/components/layout/Layout";

export interface MenuUserProps extends Omit<LayoutProps, "children"> {}
export const MenuUser: FC<MenuUserProps> = ({
  isLanguageMenu,
  setLanguageMenu,
}) => {
  return (
    <Tile className={styles.wrapper}>
      <div className={styles.iconGroup}>ALA</div>
      <div className={styles.userMenu}>BELA</div>
    </Tile>
  );
};
