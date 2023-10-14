import React, { ComponentPropsWithoutRef, FC } from "react";
import { MenuUser } from "@/components/layout/menu-user/MenuUser";

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
    <MenuUser locale={locale} username={username} notification={notification} />
  );
};
