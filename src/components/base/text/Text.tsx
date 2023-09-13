import { FC, HTMLProps } from "react";

import styles from './Text.module.scss';
export interface TextProps extends HTMLProps<HTMLParagraphElement> {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  text: string;

}

export const Text: FC<TextProps> = ({ tag, text, ...rest }) => {
  const T = tag;

  return <T>{text}</T>;
};
