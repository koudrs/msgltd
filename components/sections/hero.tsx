import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

export function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden items-center md:flex"
      >
        <Image
          src="/logo_msg_real.png"
          alt=""
          width={1064}
          height={1233}
          className="h-136 w-auto translate-x-1/5 opacity-[0.07] blur-[2px] mask-[linear-gradient(to_left,black_45%,transparent)] lg:h-160"
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="lg:col-span-7">
          <p className="animate-rise font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {dict.eyebrow}
          </p>

          <h1 className="mt-8 font-heading text-5xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <span className="animate-rise block [animation-delay:80ms]">
              {dict.line1}
            </span>
            <span className="animate-rise block [animation-delay:160ms]">
              <mark className="bg-primary px-2 text-foreground">
                {dict.markWord}
              </mark>
            </span>
            <span className="animate-rise block [animation-delay:240ms]">
              {dict.line3}
            </span>
          </h1>

          <p className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground [animation-delay:320ms]">
            {dict.sub}
          </p>

          <div className="animate-rise mt-10 flex flex-wrap items-center gap-4 [animation-delay:400ms]">
            <Link
              href="#contact"
              className="group inline-flex h-12 items-center gap-2 bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-ink-soft focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              {dict.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#services"
              className="group inline-flex h-12 items-center gap-2 border border-border px-6 text-sm font-medium transition-colors hover:border-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              {dict.ctaSecondary}
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="animate-rise self-center lg:col-span-4 lg:col-start-9 [animation-delay:480ms]">
          <p className="border-b border-foreground pb-3 font-mono text-xs tracking-[0.18em] text-foreground uppercase">
            {dict.assetIndexTitle}
          </p>
          <ul>
            {dict.assets.map((asset) => (
              <li
                key={asset.code}
                className="flex items-baseline justify-between gap-4 border-b border-border py-3.5"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    {asset.code}
                  </span>
                  <span className="font-heading text-base font-semibold">
                    {asset.name}
                  </span>
                </div>
                <span className="text-right text-xs text-muted-foreground">
                  {asset.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
