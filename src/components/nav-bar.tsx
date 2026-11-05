import { Button } from "./ui/button";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { getTranslations } from "next-intl/server";

export default async function Navbar() {
  const t = await getTranslations("navbar");
  return (
    <div className="w-full px-8 py-4 flex justify-between items-center">
      <div>
        <h1>{t("logo")}</h1>
      </div>
      <div className="flex gap-6">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <Button>{t("btn_login")}</Button>
      </div>
    </div>
  );
}
