import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import siteConfig from "../configs/base-config.exemple.json";

const locales = (siteConfig.i18n?.supportedLanguages || ["en"]) as readonly string[];
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    locale = siteConfig.i18n?.defaultLanguage || locales[0];
  }

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
