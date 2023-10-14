import styles from "./MenuUser.module.scss";
import { Tile } from "@/components/base/tile/Tile";
import { FC } from "react";
import { LayoutProps } from "@/components/layout/Layout";
import { MenuLanguage } from "@/components/layout/menu-user/menu-language/MenuLanguage";
import { Text } from "@/components/base/text/Text";
import { Theme } from "@/components/layout/menu-user/theme/Theme";
import { Notification } from "@/components/layout/menu-user/notification/Notification";

export interface MenuUserProps extends Pick<LayoutProps, "locale"> {
  username: string;
  notification?: string[];
}
export const MenuUser: FC<MenuUserProps> = ({
  locale,
  username,
  notification,
}) => {
  return (
    <Tile className={styles.wrapper}>
      <div className={styles.iconGroup}>ALA</div>
      <div className={styles.userMenu}>
        <MenuLanguage locale={locale} />
        <Theme />
        <Notification notifications={notification} />
        <div className={styles.username}>
          <Text
            tag="span"
            text={username}
            fontFamily="inter"
            color="gray"
            fontSize="sm"
          />
        </div>
      </div>
    </Tile>
  );
};
