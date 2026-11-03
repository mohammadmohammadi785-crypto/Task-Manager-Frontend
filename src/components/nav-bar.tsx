import React from "react";
import { Button } from "./ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTranslations } from "next-intl";
export default function Navbar() {
  const t = useTranslations("navbar");
  return (
    <div className="w-full px-8 py-4 flex justify-between items-center">
      <div>
        <h1>{t("logo")}</h1>
      </div>
      <div className="flex gap-6">
        <ThemeSwitcher />
        <Button>{t("btn_login")}</Button>
      </div>
    </div>
  );
}
