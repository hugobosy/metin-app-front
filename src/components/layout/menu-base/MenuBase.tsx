import styles from "./MenuBase.module.scss";
import { Button } from "@/components/base/button/Button";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { LayoutProps } from "@/components/layout/Layout";
import classNames from "classnames";
import { Burger } from "@/components/base/burger/Burger";
import { menu } from "@/const/menu";

export interface MenuBaseProps extends Pick<LayoutProps, "locale"> {}
export const MenuBase: FC<MenuBaseProps> = ({ locale }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className={classNames(styles.wrapper, activeMenu && styles.active)}>
      <ul className={classNames(styles.list, activeMenu && styles.active)}>
        {menu(locale).map((item) => (
          <li key={item.text} className={styles["list-item"]}>
            <Button
              text={item.text}
              href={item.href}
              icon={item.icon}
              fontFamily="montserrat"
              fontSize="xxs"
              fontColor="gray"
              className={styles.link}
            />
          </li>
        ))}
      </ul>
      <div className={styles.mobile}>
        <Burger
          setShowMobileNavigation={setActiveMenu}
          showMobileNavigation={activeMenu}
        />
      </div>
    </div>
  );
};
