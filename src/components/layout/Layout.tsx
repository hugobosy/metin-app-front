import React, { ComponentPropsWithoutRef, FC } from "react";
import { MenuUser } from "@/components/layout/menu-user/MenuUser";

export interface LayoutProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  isLanguageMenu: boolean;
  setLanguageMenu: (isLanguage: boolean) => void;
}

export const Layout: FC<LayoutProps> = ({
  children,
  isLanguageMenu,
  setLanguageMenu,
}) => {
  return (
    <MenuUser
      isLanguageMenu={isLanguageMenu}
      setLanguageMenu={setLanguageMenu}
    />
  );
};
