import { getAllNews, newsCategoryIds, relativeTime } from "@/lib/news";
import type { Dictionary, Locale } from "@/lib/i18n";
import { NewsTabs, type NewsTab } from "./news-tabs";

export async function MarketWatchSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["news"];
}) {
  const allNews = await getAllNews(locale, 10);
  const now = Date.now();

  const tabs: NewsTab[] = newsCategoryIds.map((categoryId) => ({
    id: categoryId,
    label: dict.tabs[categoryId],
    items: allNews[categoryId].map((item) => ({
      title: item.title,
      url: item.url,
      source: item.source,
      timeAgo: relativeTime(item.publishedAt, locale, now),
    })),
  }));

  return (
    <section id="news" className="scroll-mt-16 border-b border-border bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-14 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              {dict.eyebrow}
            </p>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
              {dict.heading}
            </h2>
          </div>
          <p className="max-w-md self-end text-sm leading-relaxed text-white/60 lg:col-span-5 lg:col-start-8">
            {dict.sub}
          </p>
        </div>

        <NewsTabs
          tabs={tabs}
          tablistAria={dict.tablistAria}
          emptyMessage={dict.empty}
          readAtSource={dict.readAtSource}
        />
      </div>
    </section>
  );
}
