import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookiesInfo = await cookies();
  const locale = cookiesInfo.get("locale")?.value || "en";

  return {
    locale,
    messages: await import(`../messages/${locale}.json`),
  };
});
