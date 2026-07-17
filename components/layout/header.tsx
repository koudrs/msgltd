"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Dictionary, Locale } from "@/lib/i18n";

function navItems(dict: Dictionary["nav"]) {
  return [
    { name: dict.about, href: "#about" },
    { name: dict.services, href: "#services" },
    { name: dict.news, href: "#news" },
    { name: dict.contact, href: "#contact" },
  ];
}

function LanguageSwitcher({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-1.5 font-mono text-xs ${className}`}>
      <Link
        href="/en"
        aria-current={locale === "en" ? "page" : undefined}
        className={
          locale === "en"
            ? "font-medium text-foreground"
            : "text-muted-foreground transition-colors hover:text-foreground"
        }
      >
        EN
      </Link>
      <span aria-hidden className="text-border">
        /
      </span>
      <Link
        href="/es"
        aria-current={locale === "es" ? "page" : undefined}
        className={
          locale === "es"
            ? "font-medium text-foreground"
            : "text-muted-foreground transition-colors hover:text-foreground"
        }
      >
        ES
      </Link>
    </div>
  );
}

export function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary["nav"];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = navItems(dict);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3">
          <Image
            src="/logo_msg_real.png"
            alt="Middleton Services Group LTD"
            width={1064}
            height={1233}
            className="h-10 w-auto"
          />
          <span className="flex flex-col justify-center">
            <span className="font-heading text-lg leading-tight font-bold tracking-tight">
              MSG LTD.
            </span>
            <span className="hidden font-mono text-[9px] leading-tight tracking-[0.16em] text-muted-foreground uppercase sm:block">
              Making the markets accessible
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} />
          <Button
            size="sm"
            className="rounded-none font-medium"
            nativeButton={false}
            render={<Link href="#contact" />}
          >
            {dict.cta}
          </Button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher locale={locale} />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label={dict.openMenu}>
                  <Menu className="h-5 w-5" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-75 bg-background">
              <SheetTitle className="sr-only">{dict.openMenu}</SheetTitle>
              <div className="flex flex-col gap-6 p-6 pt-14">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-2xl font-bold tracking-tight"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  className="mt-4 rounded-none"
                  nativeButton={false}
                  render={
                    <Link href="#contact" onClick={() => setIsOpen(false)} />
                  }
                >
                  {dict.cta}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
