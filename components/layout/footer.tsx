import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

export function Footer({
  dict,
  nav,
}: {
  dict: Dictionary["footer"];
  nav: Dictionary["nav"];
}) {
  const navigation = [
    { name: nav.about, href: "#about" },
    { name: nav.services, href: "#services" },
    { name: nav.news, href: "#news" },
    { name: nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5">
              <Image
                src="/logo_msg_real.png"
                alt="Middleton Services Group LTD"
                width={1064}
                height={1233}
                className="h-14 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-tight">
                  Middleton
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] text-white/50 uppercase">
                  Services Group LTD
                </span>
              </div>
            </div>
            <p className="mt-5 font-mono text-xs tracking-[0.14em] text-primary uppercase">
              Making the markets accessible
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {dict.blurb}
            </p>

            <p className="mt-8 font-mono text-xs tracking-[0.14em] text-white/40 uppercase">
              {dict.officesLabel}
            </p>
            <ul className="mt-3 space-y-1.5">
              {dict.offices.map((office) => (
                <li key={office} className="text-sm text-white/70">
                  {office}
                </li>
              ))}
            </ul>
          </div>

          <nav className="lg:col-span-3 lg:col-start-7" aria-label={dict.footerAria}>
            <p className="font-mono text-xs tracking-[0.14em] text-white/40 uppercase">
              {dict.navigate}
            </p>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="font-mono text-xs tracking-[0.14em] text-white/40 uppercase">
              {dict.desks}
            </p>
            <ul className="mt-4 space-y-2.5">
              {dict.deskItems.map((desk) => (
                <li key={desk} className="text-sm text-white/70">
                  {desk}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-white/40">
            © {new Date().getFullYear()} Middleton Services Group LTD.{" "}
            {dict.rights}
          </p>
          <div className="flex flex-col gap-1.5 font-mono text-xs text-white/40 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="mailto:info@msgltd.net"
              className="transition-colors hover:text-white/70"
            >
              info@msgltd.net
            </a>
            <p>
              {dict.developedBy}{" "}
              <a
                href="https://koudrs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors hover:text-primary"
              >
                koudrs.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
