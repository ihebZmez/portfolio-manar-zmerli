"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { locales } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const segments = pathname.split("/");
    if ((locales as readonly string[]).includes(segments[1] as string)) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }

    startTransition(() => {
      router.replace(segments.join("/") || "/" + nextLocale);
      router.refresh();
    });
  };

  return (
    <select
      value={locale}
      onChange={handleLocaleChange}
      disabled={isPending}
      className={`rounded-full border border-border/60 bg-background/70 px-3 py-2 text-sm text-foreground outline-none transition-colors hover:border-primary/40 hover:text-primary ${
        isPending ? "opacity-50" : ""
      }`}
    >
      {(locales as readonly string[]).map((code) => (
        <option key={code} value={code} className="bg-background text-foreground">
          {t(code)}
        </option>
      ))}
    </select>
  );
}
