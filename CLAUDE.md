# Middleton Services Group LTD (msgltd.net)

## Project Overview
One-page portal for Middleton Services Group LTD — a **private business consulting firm** engaged in five booming markets: Commodities, Premium Real Estate, Luxury Assets, Digital Assets, E-Commerce.

**Slogan:** Making the Markets Accessible
**Offices:** Miami, FL 33166 (US) · Panama City, Panama — NOT United Kingdom (early copy had UK by mistake; client corrected it)

**Positioning rule (client, revised 2026-07-20 — STRICT):** the firm does NOT buy, sell, trade, or intermediate — and the copy must never suggest it does (no "broker", "transactions", "counterparties", "acquisition & disposal", "bring assets to market", "connect capital"). Frame: a consulting firm that *engages in / operates inside* high-value markets ("nos metemos en negocios grandes"). Also: never enumerate concrete luxury items (aircraft, yachts, horses, jewelry, art) — use the umbrella term **Luxury Assets**. Umbrella terms are the rule: Commodities (covers oil/gold/sugar/energy), Digital Assets (covers crypto), E-Commerce, Premium Real Estate, Luxury Assets. Terminology was proposed to the client for sign-off before launch.

## Tech Stack
- Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4
- shadcn/ui on **@base-ui** (NOT Radix — components use `render={...}` prop, not `asChild`)
- pnpm

## Design System (Nordic / European business, refs: Finexa + Raiffeisen Bank on Behance)
- **Palette:** Signal Yellow `#ffd400` (primary), Ink `#101010`, White, Fog `#f4f4f2`, hairlines `#e4e4e1`. Tokens in `app/globals.css` (hex, not oklch).
- **Type:** Schibsted Grotesk (display, `font-heading`), Inter (body), Geist Mono (`font-mono` — eyebrows, ticker codes, metadata). Wired via next/font in `app/layout.tsx`.
- **Language:** mono uppercase eyebrows, hairline rules, sharp corners (`--radius: 0.25rem`, buttons often `rounded-none`), yellow used sparingly as signal.
- **Structural device:** sectors carry ticker symbols (CMD, RES, LUX, DGA, ECM) — "every sector is a market". Five sectors (client: "los cinco negocios boomin", E-Commerce last); hero sector index, services list, and footer must stay in sync.
- **Section naming:** the news section is called "News"/"Noticias" (client explicitly rejected "Market Watch").
- **Signature element:** live news ticker (black band, real headlines) under the hero.

## i18n (hand-rolled, zero deps)
- Routes: `app/[lang]/` with `generateStaticParams` (['en','es']), `dynamicParams = false`. `/` 307-redirects to `/en` via `next.config.ts` redirects.
- ALL copy lives in `lib/i18n.ts` (`Dictionary` type + `en`/`es` objects). Sections take `dict` slices as props — no hardcoded strings in components.
- `<html lang>` set per locale in `app/[lang]/layout.tsx`; per-locale metadata via `generateMetadata` with hreflang alternates (en, es, x-default → /en).
- Language switcher (EN/ES) in header, desktop + mobile.
- News feeds are ALSO localized: `/es` pulls Spanish-language Google News feeds (`hl=es-419`).

## News Engine (client's #1 feature)
- `lib/news.ts` — fetches Google News RSS per category (markets, oil, gold, crypto, ecommerce, business) and per locale, parses with fast-xml-parser, dedupes, strips " - Source" suffixes. Each fetch: `next: { revalidate: 900 }`.
- Page-level `export const revalidate = 900` in `app/[lang]/page.tsx` (ISR every 15 min).
- `components/sections/market-watch.tsx` (server, fetches all categories in parallel) → `news-tabs.tsx` (client tabs, no client fetching; relative times precomputed server-side to avoid hydration mismatch, localized "2h ago"/"hace 2 h").
- `components/sections/ticker.tsx` — CSS marquee (`.animate-ticker` in globals.css), paused on hover, disabled under reduced motion.
- ⚠️ Google News RSS terms allow personal, non-commercial use only — before production launch, swap feeds for a licensed source (e.g. NewsData.io, GNews, marketaux, Finnhub) keeping the same `NewsItem` interface.

## SEO / Agentic Search
- Metadata + OpenGraph per locale in `app/[lang]/layout.tsx`; JSON-LD `@graph` (Organization with BOTH addresses [Miami US + Panama City PA], WebSite, ProfessionalService + OfferCatalog) in `app/[lang]/page.tsx`.
- `public/robots.txt` (allows GPTBot, Claude-Web, PerplexityBot, etc.), `public/llms.txt` (mentions both languages + offices), `app/sitemap.ts` (/en + /es with hreflang alternates — fragments are ignored by crawlers).
- No fake data: no invented stats, no placeholder verification codes, no OG image until assets exist.

## Commands
```bash
pnpm dev / build / start
pnpm lint / format / typecheck
```

## Contact Form / Resend
- `app/api/contact/route.ts` — POST endpoint using Resend. Sender: `notificaciones@koudrs.com` (koudrs.com domain must be verified in Resend). Recipients: `ceo@msgltd.net`, `vp@msgltd.net`. Reply-To set to the submitter.
- Needs `RESEND_API_KEY` in `.env.local` (see `.env.example`). Without it the API returns 503 and the form shows the localized error message.
- Form: `components/sections/contact-form.tsx` (client) — states idle/sending/success/error, honeypot field ("company") against bots, aria-live status.
- Footer credit: "Developed by koudrs.com".

## Logo / Brand Assets
- Logo source: `public/logo_msg_real.png` (1064×1233 RGBA shield — gunmetal crest with gold compass points, "MSG"). Transparent background (the cream tint in previews is RGB under alpha-0 — it does NOT render).
- Usage: header (h-9, wordmark next to it says **"MSG LTD."** — full company name only in hero/footer/other areas, per client), hero background watermark (7% opacity, blurred, masked right side, md+ only), footer (h-14, full name). UI usages go through next/image so the 1.8MB source is served resized/WebP.
- Derived assets (regenerate with PIL/magick if logo changes): `app/icon.png` (512²), `app/apple-icon.png` (180²), `app/favicon.ico` (48/32/16), `public/logo-msg-512.png` (square, used by JSON-LD `Organization.logo`), `public/og-image.png` (1200×630 card: ink bg, shield left, wordmark + yellow slogan right — used by OpenGraph).

## Pending / Next
- Set RESEND_API_KEY in production env + verify koudrs.com domain in Resend.
