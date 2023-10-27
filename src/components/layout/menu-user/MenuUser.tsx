import styles from "./MenuUser.module.scss";
import { Tile } from "@/components/base/tile/Tile";
import { FC, useState } from "react";
import { LayoutProps } from "@/components/layout/Layout";
import { MenuLanguage } from "@/components/layout/menu-user/menu-language/MenuLanguage";
import { Theme } from "@/components/layout/menu-user/theme/Theme";
import { Notification } from "@/components/layout/menu-user/notification/Notification";
import { UserProfile } from "@/components/layout/menu-user/user-profile/UserProfile";
import { MenuBalance } from "./menu-balance/MenuBalance";
import { ModalAddBalance } from "@/components/layout/menu-user/menu-balance/modal-add-balance/ModalAddBalance";
import { useUpdateBalance } from "@/hooks/mutations/useUpdateBalance";

export interface MenuUserProps extends Omit<LayoutProps, "children"> {
  username: string;
  notification?: string[];
}
export const MenuUser: FC<MenuUserProps> = ({
  locale,
  username,
  notification,
  balanceWon,
  balanceYang,
  userId,
}) => {
  const [showModal, setShowModal] = useState(false);
  const { mutate: updateBalance, isLoading: isLoadingUpdateBalance } =
    useUpdateBalance();
  return (
    <>
      <Tile className={styles.wrapper}>
        <MenuBalance
          balanceWon={balanceWon}
          balanceYang={balanceYang}
          setShowModal={setShowModal}
          isLoadingUpdateBalance={isLoadingUpdateBalance}
        />
        <div className={styles.userMenu}>
          <MenuLanguage locale={locale} />
          <Theme />
          <Notification notifications={notification} />
          <UserProfile username={username} locale={locale} />
        </div>
      </Tile>
      <ModalAddBalance
        showModal={showModal}
        setShowModal={setShowModal}
        userId={userId}
        updateBalance={updateBalance}
      />
    </>
  );
};
