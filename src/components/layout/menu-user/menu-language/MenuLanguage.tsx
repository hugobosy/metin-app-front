import styles from "./MenuLanguage.module.scss";
import { Button } from "@/components/base/button/Button";
import { ChangeEvent, FC, FormEvent } from "react";
import { LayoutProps } from "@/components/layout/Layout";
import { usePathname, useRouter } from "next-intl/client";

export interface MenuLanguageProps extends Pick<LayoutProps, "locale"> {}
export const MenuLanguage: FC<MenuLanguageProps> = ({ locale }) => {
  const router = useRouter();
  const path = usePathname();
  console.log(path);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(path, { locale: e.target.value });
  };

  return (
    <select value={locale} onChange={handleChange}>
      <option value="pl" defaultChecked>
        Polska
      </option>
      <option value="en">English</option>
      <option value="de">Deuschland</option>
      <option value="en">English</option>
    </select>
  );
};
