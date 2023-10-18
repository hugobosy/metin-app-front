import { ComponentPropsWithRef, FC, useEffect, useRef, useState } from "react";
import styles from "./Modal.module.scss";
import classNames from "classnames";
import { Icon } from "../icon/Icon";
import { Button } from "../button/Button";

export interface ModalProps extends ComponentPropsWithRef<"div"> {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export const Modal: FC<ModalProps> = ({
  showModal,
  setShowModal,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onModalClick = (e: any) => {
      if (modalRef.current?.contains(e.target as Element)) {
        return;
      }

      setShowModal(false);
    };
    const wrapperModal = document.querySelector(".wrapper");

    wrapperModal?.addEventListener("click", onModalClick);
    return () => {
      wrapperModal?.removeEventListener("click", onModalClick);
    };
  }, []);
  return (
    <div
      className={classNames(
        styles.wrapper,
        showModal && styles["wrapper-active"]
      )}>
      <div className={styles.modal} ref={modalRef}>
        <Button
          icon="Exit"
          className={styles["modal-exit"]}
          onClick={() => setShowModal(false)}
        />
        {children}
      </div>
    </div>
  );
};
