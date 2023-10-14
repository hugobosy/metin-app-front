import React, { ComponentPropsWithoutRef, FC } from "react";
import { MenuUser } from "@/components/layout/menu-user/MenuUser";
import styles from "./Layout.module.scss";
import { MenuBase } from "@/components/layout/menu-base/MenuBase";

export interface LayoutProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  locale: string;
  username: string;
  notification?: string[];
}

export const Layout: FC<LayoutProps> = ({
  children,
  locale,
  username,
  notification,
}) => {
  return (
    <div className={styles.wrapper}>
      <MenuBase locale={locale} />
      <div className={styles.content}>
        <MenuUser
          locale={locale}
          username={username}
          notification={notification}
        />
        {children}
      </div>
    </div>
  );
};
