import React, { ComponentPropsWithoutRef, FC } from "react";
import styles from "./Tile.module.scss";
import classNames from "classnames";

export interface TileProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
}

export const Tile: FC<TileProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
};
