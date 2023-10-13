import { ComponentProps, FC, useMemo } from "react";
import { icons } from "@/const/icons";

export type IconNames = keyof typeof icons;

interface IconProps extends ComponentProps<"svg"> {
  name: IconNames & string;
}
export const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = useMemo(() => icons[name] as () => JSX.Element, [name]);

  return <IconComponent {...props} />;
};
