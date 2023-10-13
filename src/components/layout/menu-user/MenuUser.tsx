import styles from "./MenuUser.module.scss";
import { Tile } from "@/components/base/tile/Tile";
import { FC } from "react";
import { LayoutProps } from "@/components/layout/Layout";
import { MenuLanguage } from "@/components/layout/menu-user/menu-language/MenuLanguage";
import { Icon } from "@/components/base/icon/Icon";

export interface MenuUserProps extends Omit<LayoutProps, "children"> {}
export const MenuUser: FC<MenuUserProps> = ({
  isLanguageMenu,
  setLanguageMenu,
  locale,
}) => {
  return (
    <Tile className={styles.wrapper}>
      <div className={styles.iconGroup}>ALA</div>
      <div className={styles.userMenu}>
        <MenuLanguage locale={locale} />
      </div>
    </Tile>
  );
};
