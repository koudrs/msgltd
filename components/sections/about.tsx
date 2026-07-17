import type { Dictionary } from "@/lib/i18n";

export function AboutSection({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border bg-muted">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-28">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {dict.eyebrow}
          </p>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:sticky lg:top-28">
            {dict.heading}
          </h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            {dict.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-12">
            {dict.principles.map((principle) => (
              <div
                key={principle.term}
                className="grid gap-2 border-t border-border py-6 sm:grid-cols-3 sm:gap-6"
              >
                <dt className="font-heading text-lg font-bold">
                  <span
                    aria-hidden
                    className="mr-3 inline-block h-2 w-2 bg-primary"
                  />
                  {principle.term}
                </dt>
                <dd className="text-sm leading-relaxed text-muted-foreground sm:col-span-2">
                  {principle.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
