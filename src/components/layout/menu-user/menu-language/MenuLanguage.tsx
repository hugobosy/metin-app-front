import styles from "./MenuLanguage.module.scss";
import { FC, useEffect, useRef, useState } from "react";
import { LayoutProps } from "@/components/layout/Layout";
import { usePathname, useRouter } from "next-intl/client";
import { useTranslations } from "next-intl";
import { Button } from "@/components/base/button/Button";
import { IconNames } from "@/components/base/icon/Icon";
import classNames from "classnames";

export interface MenuLanguageProps extends Pick<LayoutProps, "locale"> {}

export const MenuLanguage: FC<MenuLanguageProps> = ({ locale }) => {
  const router = useRouter();
  const path = usePathname();
  const t = useTranslations("Layout");

  const dropDownRef = useRef<HTMLDivElement>(null);

  const [showMenu, setShowMenu] = useState(false);
  const handleChange = (locale: string) => {
    router.push(path, { locale });
  };
  useEffect(() => {
    const onBodyClick = (event: any) => {
      if (dropDownRef.current?.contains(event.target)) {
        return;
      }

      setShowMenu(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  type Language = {
    text: string;
    icon: IconNames;
    onClick?: () => void;
  };

  // @ts-ignore
  const setNameSelectedLocale = (): Omit<Language, "onClick"> => {
    switch (locale) {
      case "pl":
        return { text: t("language.polish"), icon: "Poland" };
      case "en":
        return { text: t("language.english"), icon: "England" };
      case "de":
        return { text: t("language.german"), icon: "Germany" };
    }
  };

  const languages: Language[] = [
    {
      text: t("language.polish"),
      onClick: () => handleChange("pl"),
      icon: "Poland",
    },
    {
      text: t("language.english"),
      onClick: () => handleChange("en"),
      icon: "England",
    },
    {
      text: t("language.german"),
      onClick: () => handleChange("de"),
      icon: "Germany",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Button
        text={setNameSelectedLocale()?.text}
        icon={setNameSelectedLocale()?.icon}
        className={classNames(styles.button, styles.chooseButton)}
        onClick={() => setShowMenu((prevState) => !prevState)}
      />
      <ul
        className={classNames(styles.list, showMenu && styles["list-active"])}
      >
        {languages.map((lang) => (
          <li className={styles["list-item"]} key={lang.text}>
            <Button
              text={lang.text}
              icon={lang.icon}
              onClick={lang.onClick}
              className={styles.button}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
