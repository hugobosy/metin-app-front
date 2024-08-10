import { pets } from "@/const/pets";
import React, { ComponentProps, FC, useMemo } from "react";
import Image from "next/image";

export type PetNames = keyof typeof pets;

interface PetProps extends ComponentProps<"svg"> {
  name: PetNames & string;
}

export const Pet: FC<PetProps> = ({ name }) => {
  const petName = useMemo(() => pets[name], [name]);

  return <Image src={petName} alt={petName} />;
};
