"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export interface DisplayNewsItem {
  title: string;
  url: string;
  source: string;
  timeAgo: string;
}

export interface NewsTab {
  id: string;
  label: string;
  items: DisplayNewsItem[];
}

export function NewsTabs({
  tabs,
  tablistAria,
  emptyMessage,
  readAtSource,
}: {
  tabs: NewsTab[];
  tablistAria: string;
  emptyMessage: string;
  readAtSource: string;
}) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  const [featured, ...rest] = active?.items ?? [];

  return (
    <div>
      <div
        role="tablist"
        aria-label={tablistAria}
        className="flex flex-wrap gap-x-7 gap-y-3 border-b border-white/15"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === active?.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(tab.id)}
              className={`-mb-px border-b-2 pb-3 font-mono text-xs tracking-[0.14em] uppercase transition-colors focus-visible:ring-3 focus-visible:ring-primary/60 focus-visible:outline-none ${
                isActive
                  ? "border-primary text-white"
                  : "border-transparent text-white/50 hover:text-white/80"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {!featured ? (
        <p className="py-16 font-mono text-sm text-white/60">{emptyMessage}</p>
      ) : (
        <div className="grid gap-10 pt-10 lg:grid-cols-12">
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block lg:col-span-5"
          >
            <p className="font-mono text-xs text-primary">
              {featured.source} · {featured.timeAgo}
            </p>
            <h3 className="mt-4 font-heading text-2xl leading-snug font-bold text-balance text-white transition-colors group-hover:text-primary sm:text-3xl">
              {featured.title}
            </h3>
            <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] text-white/60 uppercase transition-colors group-hover:text-white">
              {readAtSource}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </a>

          <ul className="lg:col-span-6 lg:col-start-7">
            {rest.slice(0, 7).map((item) => (
              <li key={item.url} className="border-b border-white/10">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-6 py-4"
                >
                  <div>
                    <p className="text-sm leading-snug font-medium text-white/90 transition-colors group-hover:text-primary">
                      {item.title}
                    </p>
                    <p className="mt-1.5 font-mono text-[11px] text-white/45">
                      {item.source} · {item.timeAgo}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition-colors group-hover:text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
