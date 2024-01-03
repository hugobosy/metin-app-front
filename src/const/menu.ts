import { IconNames } from "@/components/base/icon/Icon";
import { projectURL } from "@/const/projectURL";
import { useTranslations } from "next-intl";

type Menu = {
  text: string;
  href: string;
  icon: IconNames;
};

export const menu = (locale: string): Menu[] => {
  const t = useTranslations("Layout");
  return [
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
};
