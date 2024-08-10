import styles from "./ModalPets.module.scss";
import { Modal, ModalProps } from "@/components/base/modal/Modal";
import { FC } from "react";

export interface ModalPetsProps extends ModalProps {}

export const ModalPets: FC<ModalPetsProps> = ({ showModal, setShowModal }) => {
  return <Modal showModal={showModal} setShowModal={setShowModal}></Modal>;
};
