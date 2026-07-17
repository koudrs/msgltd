import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

export function ServicesSection({ dict }: { dict: Dictionary["services"] }) {
  return (
    <section id="services" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              {dict.eyebrow}
            </p>
            <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              {dict.heading}
            </h2>
          </div>
          <p className="max-w-md self-end text-base leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">
            {dict.sub}
          </p>
        </div>

        <ul className="mt-16 border-t border-foreground">
          {dict.items.map((service) => (
            <li key={service.id} className="group border-b border-border">
              <Link
                href="#contact"
                className="grid gap-3 py-7 transition-colors group-hover:bg-muted sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-4 sm:-mx-4"
              >
                <span className="font-mono text-xs text-muted-foreground sm:col-span-1">
                  {service.code}
                </span>
                <h3 className="font-heading text-2xl font-bold tracking-tight sm:col-span-4 sm:text-3xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-6">
                  {service.description}
                </p>
                <span className="hidden justify-self-end sm:col-span-1 sm:block">
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
