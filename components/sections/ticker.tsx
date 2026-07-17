import { getNews, type NewsItem } from "@/lib/news";
import type { Dictionary, Locale } from "@/lib/i18n";

const categoryTag: Record<string, string> = {
  markets: "MKT",
  oil: "OIL",
  gold: "AU",
  crypto: "BTC",
  business: "BIZ",
};

async function tickerItems(locale: Locale) {
  const pools = await Promise.all(
    (["markets", "oil", "gold", "crypto"] as const).map((category) =>
      getNews(category, locale, 4),
    ),
  );
  const interleaved: NewsItem[] = [];
  for (let i = 0; i < 4; i++) {
    for (const pool of pools) {
      if (pool[i]) interleaved.push(pool[i]);
    }
  }
  return interleaved;
}

export async function Ticker({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["ticker"];
}) {
  const items = await tickerItems(locale);
  const feed =
    items.length > 0
      ? items.map((item) => ({
          tag: categoryTag[item.category],
          title: item.title,
        }))
      : dict.fallback;

  const strip = (
    <>
      {feed.map((item, i) => (
        <span key={i} className="inline-flex items-baseline gap-3 pr-12">
          <span className="font-mono text-xs font-medium text-primary">
            {item.tag}
          </span>
          <span className="font-mono text-xs text-white/85">{item.title}</span>
          <span aria-hidden className="pl-9 text-primary/60">
            /
          </span>
        </span>
      ))}
    </>
  );

  return (
    <aside
      aria-label={dict.aria}
      className="ticker-mask overflow-hidden border-b border-border bg-ink py-3"
    >
      <div className="animate-ticker flex w-max whitespace-nowrap">
        <div className="flex items-baseline">{strip}</div>
        <div className="flex items-baseline" aria-hidden>
          {strip}
        </div>
      </div>
    </aside>
  );
}
