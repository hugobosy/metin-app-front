import styles from "./MenuLanguage.module.scss";
import { FC } from "react";
import { LayoutProps } from "@/components/layout/Layout";
import { usePathname, useRouter } from "next-intl/client";
import { DropDown } from "@/components/base/dropdown/Dropdown";
import { useTranslations } from "next-intl";
import { Button } from "@/components/base/button/Button";
import { IconNames } from "@/components/base/icon/Icon";

export interface MenuLanguageProps extends Pick<LayoutProps, "locale"> {}

export const MenuLanguage: FC<MenuLanguageProps> = ({ locale }) => {
  const router = useRouter();
  const path = usePathname();
  const t = useTranslations("Layout");

  const handleChange = (locale: string) => {
    router.push(path, { locale });
  };

  type Language = {
    text: string;
    icon: IconNames;
  };

  // @ts-ignore
  const setNameSelectedLocale = (): Language => {
    switch (locale) {
      case "pl":
        return { text: t("language.polish"), icon: "Poland" };
      case "en":
        return { text: t("language.english"), icon: "England" };
      case "de":
        return { text: t("language.german"), icon: "Germany" };
    }
  };

  const languages = [
    {
      text: t("language.polish"),
      onClick: () => handleChange("pl"),
    },
    {
      text: t("language.english"),
      onClick: () => handleChange("en"),
    },
    {
      text: t("language.german"),
      onClick: () => handleChange("de"),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Button
        text={setNameSelectedLocale()?.text}
        icon={setNameSelectedLocale()?.icon}
      />
      <ul>
        {languages.map((lang) => (
          <li>
            <Button text={lang.text} onClick={lang.onClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};
