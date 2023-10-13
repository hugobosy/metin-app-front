import React, { ComponentPropsWithoutRef, FC } from "react";

export interface LayoutProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div></div>;
};
