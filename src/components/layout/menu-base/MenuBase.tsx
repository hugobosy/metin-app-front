import styles from "./MenuBase.module.scss";
import { Tile } from "@/components/base/tile/Tile";
import { Button } from "@/components/base/button/Button";
import { useTranslations } from "next-intl";
import { projectURL } from "@/const/projectURL";
import { FC } from "react";
import { LayoutProps } from "@/components/layout/Layout";

export interface MenuBaseProps extends Pick<LayoutProps, "locale"> {}
export const MenuBase: FC<MenuBaseProps> = ({ locale }) => {
  const t = useTranslations("Layout");
  const menu = [
    {
      text: t("menu.dashboard"),
      href: projectURL(locale).HOME,
      icon: "Home",
    },
  ];

  return (
    <Tile>
      <ul>
        {menu.map((item) => (
          <li>
            <Button text={item.text} href={item.href} />{" "}
          </li>
        ))}
      </ul>
    </Tile>
  );
};
