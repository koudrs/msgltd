import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist_Mono, Inter, Schibsted_Grotesk } from "next/font/google";

import "../globals.css";
import { cn } from "@/lib/utils";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const display = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL("https://msgltd.net"),
    title: {
      default: dict.meta.title,
      template: "%s — Middleton Services Group",
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: "Middleton Services Group LTD" }],
    creator: "Middleton Services Group LTD",
    publisher: "Middleton Services Group LTD",
    category: "Business Services",
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
      locale: lang === "en" ? "en_US" : "es_PA",
      alternateLocale: lang === "en" ? "es_PA" : "en_US",
      url: `https://msgltd.net/${lang}`,
      siteName: "Middleton Services Group LTD",
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Middleton Services Group LTD — Making the Markets Accessible",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.ogDescription,
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        es: "/es",
        "x-default": "/en",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";

  return (
    <html
      lang={locale}
      className={cn(
        "antialiased",
        inter.variable,
        display.variable,
        mono.variable,
      )}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
