import styles from "./UserProfile.module.scss";
import { Text } from "@/components/base/text/Text";
import { FC, useEffect, useRef, useState } from "react";
import { MenuUserProps } from "@/components/layout/menu-user/MenuUser";
import { useTranslations } from "next-intl";
import { projectURL } from "@/const/projectURL";
import { useRouter } from "next/navigation";
import { removeAccessTokenCookie } from "@/utils/cookie";
import { Button } from "@/components/base/button/Button";
import { IconNames } from "@/components/base/icon/Icon";
import classNames from "classnames";

export interface UserProfileProps
  extends Pick<MenuUserProps, "username" | "locale"> {}

export const UserProfile: FC<UserProfileProps> = ({ username, locale }) => {
  const t = useTranslations("Layout");
  const [showMenu, setShowMenu] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleLogout = () => {
    removeAccessTokenCookie();
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

  type Menu = {
    text: string;
    onClick: () => void;
    icon: IconNames;
  };

  const menu: Menu[] = [
    {
      text: t("user.profile"),
      onClick: () => router.push(projectURL(locale).PROFILE),
      icon: "User",
    },
    {
      text: t("user.logout"),
      onClick: () => handleLogout(),
      icon: "Logout",
    },
  ];

  return (
    <div className={styles.username}>
      <Text
        tag="span"
        text={username}
        fontFamily="inter"
        color="gray"
        fontSize="sm"
        onClick={() => setShowMenu(true)}
      />

      <ul
        className={classNames(styles.list, showMenu && styles["list-active"])}
      >
        {menu.map((item) => (
          <li key={item.text} className={styles["list-item"]}>
            <Button
              text={item.text}
              onClick={item.onClick}
              icon={item.icon}
              className={styles.button}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
