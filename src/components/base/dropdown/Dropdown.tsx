import React, { useEffect, useRef, useState } from "react";

import styles from "./DropDown.module.scss";
import { Button, ButtonProps } from "@/components/base/button/Button";
import { useTranslations } from "next-intl";

export type DropdownButton = ButtonProps & { isHidden?: boolean };

interface DropDownProps {
  buttons?: DropdownButton[];
  id?: string;
  label?: string;
}

export const DropDown: React.FC<DropDownProps> = ({
  label,
  buttons,
  id,
  ...rest
}) => {
  const t = useTranslations();
  const [showOptions, setShowOptions] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onBodyClick = (event: any) => {
      if (dropDownRef.current?.contains(event.target)) {
        return;
      }

      setShowOptions(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);
  return (
    <div className={styles.optionsWrapper} ref={dropDownRef}>
      <Button
        type="button"
        text={label || t("options")}
        variant="base"
        className={styles.options}
        {...rest}
        onClick={() => {
          setShowOptions((prev) => !prev);
        }}
      />
      {showOptions && (
        <ul className={styles.optionList}>
          {buttons
            ?.filter((button) => !button.isHidden)
            .map(({ isHidden, ...button }) => (
              <li key={button.text as string} className={styles.optionItem}>
                <Button
                  {...button}
                  onClick={() => {
                    // @ts-ignore
                    button.onClick && button.onClick();
                    setShowOptions(false);
                  }}
                />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
