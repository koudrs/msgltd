import { XMLParser } from "fast-xml-parser";
import type { Locale } from "@/lib/i18n";

export const newsCategoryIds = [
  "markets",
  "oil",
  "gold",
  "crypto",
  "ecommerce",
  "business",
] as const;

export type NewsCategoryId = (typeof newsCategoryIds)[number];

export interface NewsItem {
  title: string;
  url: string;
  source: string;
  publishedAt: string; // ISO string
  category: NewsCategoryId;
}

const localeParams: Record<Locale, string> = {
  en: "hl=en-US&gl=US&ceid=US:en",
  es: "hl=es-419&gl=US&ceid=US:es-419",
};

const searchQueries: Record<Locale, Record<Exclude<NewsCategoryId, "business">, string>> = {
  en: {
    markets: '"stock market" OR "wall street" OR "S&P 500"',
    oil: '"oil prices" OR "crude oil" OR "brent crude"',
    gold: '"gold price" OR "gold market" OR "precious metals"',
    crypto: "cryptocurrency OR bitcoin OR ethereum",
    ecommerce: '"e-commerce" OR "ecommerce" OR "online retail"',
  },
  es: {
    markets: '"bolsa de valores" OR "wall street" OR "mercados bursátiles"',
    oil: '"precio del petróleo" OR "petróleo brent" OR "crudo"',
    gold: '"precio del oro" OR "metales preciosos"',
    crypto: "criptomonedas OR bitcoin OR ethereum",
    ecommerce: '"comercio electrónico" OR "e-commerce" OR "ventas online"',
  },
};

export function feedUrl(category: NewsCategoryId, locale: Locale): string {
  const params = localeParams[locale];
  if (category === "business") {
    return `https://news.google.com/rss/headlines/section/topic/BUSINESS?${params}`;
  }
  const query = searchQueries[locale][category];
  return `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&${params}`;
}

interface RssItem {
  title?: string;
  link?: string;
  pubDate?: string;
  source?: { "#text"?: string } | string;
}

const parser = new XMLParser({ ignoreAttributes: false });

function cleanTitle(title: string, source: string): string {
  // Google News titles arrive as "Headline - Source Name"
  const suffix = ` - ${source}`;
  return title.endsWith(suffix) ? title.slice(0, -suffix.length) : title;
}

function itemSource(item: RssItem): string {
  if (typeof item.source === "string") return item.source;
  return item.source?.["#text"] ?? "";
}

export async function getNews(
  category: NewsCategoryId,
  locale: Locale,
  limit = 12,
): Promise<NewsItem[]> {
  try {
    const res = await fetch(feedUrl(category, locale), {
      next: { revalidate: 900 },
      headers: { "user-agent": "Mozilla/5.0 (compatible; msgltd.net/1.0)" },
    });
    if (!res.ok) return [];

    const xml = await res.text();
    const doc = parser.parse(xml);
    const rawItems: RssItem[] = doc?.rss?.channel?.item ?? [];
    const list = Array.isArray(rawItems) ? rawItems : [rawItems];

    const seen = new Set<string>();
    const items: NewsItem[] = [];

    for (const raw of list) {
      const source = itemSource(raw);
      const title = cleanTitle(String(raw.title ?? "").trim(), source);
      const url = String(raw.link ?? "").trim();
      if (!title || !url) continue;

      const key = title
        .toLowerCase()
        .replace(/[^a-z0-9à-ÿ]/g, "")
        .slice(0, 60);
      if (seen.has(key)) continue;
      seen.add(key);

      const parsed = raw.pubDate ? new Date(raw.pubDate) : null;
      items.push({
        title,
        url,
        source: source || "Google News",
        publishedAt:
          parsed && !Number.isNaN(parsed.getTime())
            ? parsed.toISOString()
            : new Date().toISOString(),
        category,
      });

      if (items.length >= limit) break;
    }

    return items;
  } catch {
    return [];
  }
}

export async function getAllNews(
  locale: Locale,
  limit = 12,
): Promise<Record<NewsCategoryId, NewsItem[]>> {
  const results = await Promise.all(
    newsCategoryIds.map((category) => getNews(category, locale, limit)),
  );

  return Object.fromEntries(
    newsCategoryIds.map((category, i) => [category, results[i]]),
  ) as Record<NewsCategoryId, NewsItem[]>;
}

export function relativeTime(
  iso: string,
  locale: Locale,
  now = Date.now(),
): string {
  const then = new Date(iso).getTime();
  const minutes = Math.max(1, Math.round((now - then) / 60_000));
  if (minutes < 60) {
    return locale === "es" ? `hace ${minutes} min` : `${minutes}m ago`;
  }
  const hours = Math.round(minutes / 60);
  if (hours < 24) {
    return locale === "es" ? `hace ${hours} h` : `${hours}h ago`;
  }
  const days = Math.round(hours / 24);
  return locale === "es" ? `hace ${days} d` : `${days}d ago`;
}
