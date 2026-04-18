import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import siteConfig from "@/configs/base-config.exemple.json";

import "../globals.css";
import { ThemeProvider } from "../provider";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  const brandName = siteConfig.brand?.name || "MY_COMPANY";
  // Fallback to empty string or you can add website to your siteConfig.contact
  const websiteUrl =
    (siteConfig.contact as any)?.website || "http://www.aremgroup.com";

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    authors: [{ name: brandName }],
    creator: brandName,
    publisher: brandName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: websiteUrl,
      title: t("title"),
      description: t("description"),
      siteName: brandName,
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    alternates: {
      canonical: websiteUrl,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const activeLocale = locale || siteConfig.i18n?.defaultLanguage || "en";
  const dir =
    siteConfig.i18n?.direction || (activeLocale === "ar" ? "rtl" : "ltr");
  const defaultTheme = siteConfig.theme?.darkMode ? "dark" : "light";
  return (
    <html lang={activeLocale} dir={dir} suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-MWGW2FL7BG"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MWGW2FL7BG');
          `}
        </Script>
        <meta
          name="google-site-verification"
          content="MjUjqo5MP1kfsYfRKhF6OTb1f6IOSi_RCgtX_Ls6GSU"
        />
        <link
          rel="icon"
          href={siteConfig.brand?.favicon || "/b4.svg"}
          sizes="any"
        />
      </head>
      <body
        className={
          siteConfig.theme?.font === "Inter" || !siteConfig.theme?.font
            ? inter.className
            : ""
        }
      >
        <NextIntlClientProvider locale={activeLocale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme={defaultTheme}
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Script id="tawkto-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/683efa04dbbab1190c33454e/1isr018bc';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
