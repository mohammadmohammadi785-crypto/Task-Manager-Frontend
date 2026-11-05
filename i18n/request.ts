import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  let locale = "fa"; // زبان پیش‌فرض

  try {
    // ۱. دسترسی آسنکرون به کوکی‌ها در Next.js جدید
    const cookieStore = await cookies();
    locale = cookieStore.get("locale")?.value || "en";
  } catch (error) {
    // برای جلوگیری از کرش کردن در زمان Build برنامه‌ (Static Generation)
    console.log(
      "Cookies are not available during build time, using default locale 'en'.",
    );
  }

  return {
    locale,
    // ۲. حتماً انتهای امپورت پویا .default را اضافه کنید
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
