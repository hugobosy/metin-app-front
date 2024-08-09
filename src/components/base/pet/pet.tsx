import { pets } from "@/const/pets";
import { ComponentProps, FC, useMemo } from "react";

export type PetNames = keyof typeof pets;

interface PetProps extends ComponentProps<"svg"> {
  name: PetNames & string;
}

export const Pet: FC<PetProps> = ({ name }) => {
  const PetComponent = useMemo(() => pets[name] as () => JSX.Element, [name]);

  return <PetComponent />;
};
