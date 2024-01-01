import styles from "./MenuBase.module.scss";
import { Button } from "@/components/base/button/Button";
import { useTranslations } from "next-intl";
import { projectURL } from "@/const/projectURL";
import { FC } from "react";
import { LayoutProps } from "@/components/layout/Layout";
import { IconNames } from "@/components/base/icon/Icon";

export interface MenuBaseProps extends Pick<LayoutProps, "locale"> {}
export const MenuBase: FC<MenuBaseProps> = ({ locale }) => {
  const t = useTranslations("Layout");

  type Menu = {
    text: string;
    href: string;
    icon: IconNames;
  };

  const menu: Menu[] = [
    {
      text: t("menu.dashboard"),
      href: projectURL(locale).HOME,
      icon: "Home",
    },
    {
      text: t("menu.bookkeeping"),
      href: projectURL(locale).BOOKKEEPING,
      icon: "Book",
    },
    {
      text: t("menu.magazine"),
      href: projectURL(locale).MAGAZINE,
      icon: "Magazine",
    },
    {
      text: t("menu.my-animals"),
      href: projectURL(locale).ANIMALS,
      icon: "Animal",
    },
    {
      text: t("menu.my-costumes"),
      href: projectURL(locale).COSTUMES,
      icon: "Costume",
    },
    {
      text: t("menu.notepad"),
      href: projectURL(locale).NOTEPAD,
      icon: "Notepad",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {menu.map((item) => (
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
    </div>
  );
};
