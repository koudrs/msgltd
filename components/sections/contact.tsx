import type { Dictionary, Locale } from "@/lib/i18n";
import { ContactForm } from "./contact-form";

export function ContactSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["contact"];
}) {
  return (
    <section id="contact" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-28">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {dict.eyebrow}
          </p>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {dict.heading}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            {dict.sub}
          </p>

          <dl className="mt-12 space-y-6">
            <div className="border-t border-border pt-5">
              <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {dict.emailLabel}
              </dt>
              <dd className="mt-1.5 font-heading text-lg font-semibold">
                <a
                  href="mailto:info@msgltd.net"
                  className="transition-colors hover:text-muted-foreground"
                >
                  info@msgltd.net
                </a>
              </dd>
            </div>
            <div className="border-t border-border pt-5">
              <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {dict.officesLabel}
              </dt>
              {dict.offices.map((office) => (
                <dd
                  key={office}
                  className="mt-1.5 font-heading text-lg font-semibold"
                >
                  {office}
                </dd>
              ))}
            </div>
            <div className="border-t border-border pt-5">
              <dt className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {dict.sensitiveLabel}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {dict.sensitiveDetail}
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm locale={locale} dict={dict.form} />
        </div>
      </div>
    </section>
  );
}
