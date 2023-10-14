import { Icon } from "@/components/base/icon/Icon";
import styles from "./Notification.module.scss";
import {
  ComponentPropsWithoutRef,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import { Text } from "@/components/base/text/Text";
import classNames from "classnames";
import { useTranslations } from "next-intl";

export interface NotificationProps extends ComponentPropsWithoutRef<"div"> {
  notifications?: string[];
}

export const Notification: FC<NotificationProps> = ({ notifications }) => {
  const [showNotification, setShowNotification] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Layout");

  useEffect(() => {
    const onBodyClick = (event: any) => {
      if (dropDownRef.current?.contains(event.target)) {
        return;
      }

      setShowNotification(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => setShowNotification((prevState) => !prevState)}
        className={styles.notification}
      >
        <Icon name="Bell" />
        {notifications?.length && (
          <Text
            tag="p"
            text={String(notifications?.length)}
            fontSize="xxs"
            color="white"
            weight="500"
            fontFamily="inter"
            className={styles["notification-count"]}
          />
        )}
      </div>
      <ul
        className={classNames(
          styles.list,
          showNotification && styles["list-active"],
        )}
      >
        {notifications?.length ? (
          notifications?.map((notification) => (
            <li className={styles["list-item"]} key={notification}>
              <Text
                tag="span"
                text={notification}
                fontFamily="montserrat"
                fontSize="sm"
                color="gray"
              />
            </li>
          ))
        ) : (
          <Text
            tag="span"
            text={t("notification.empty-notification")}
            color="gray"
            fontFamily="montserrat"
            fontSize="sm"
          />
        )}
      </ul>
    </>
  );
};
