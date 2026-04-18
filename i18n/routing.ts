import siteConfig from "../configs/base-config.exemple.json";

const configLocales = siteConfig.i18n?.supportedLanguages || ["en"];

export const locales = configLocales as readonly string[];
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = (siteConfig.i18n?.defaultLanguage || configLocales[0]) as Locale;

