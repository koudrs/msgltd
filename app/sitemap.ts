import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: "https://msgltd.net/en",
    es: "https://msgltd.net/es",
  };

  return locales.map((locale) => ({
    url: `https://msgltd.net/${locale}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1,
    alternates: { languages },
  }));
}
