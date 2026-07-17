import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { Ticker } from "@/components/sections/ticker";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { MarketWatchSection } from "@/components/sections/market-watch";
import { ContactSection } from "@/components/sections/contact";
import { getDictionary, isLocale, type Dictionary, type Locale } from "@/lib/i18n";

// Refresh news feeds every 15 minutes
export const revalidate = 900;

function structuredData(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://msgltd.net/#organization",
        name: "Middleton Services Group LTD",
        alternateName: "MSG LTD",
        url: "https://msgltd.net",
        logo: {
          "@type": "ImageObject",
          url: "https://msgltd.net/logo-msg-512.png",
          width: 512,
          height: 512,
        },
        slogan: "Making the Markets Accessible",
        description: dict.meta.description,
        email: "info@msgltd.net",
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Miami",
            addressRegion: "FL",
            postalCode: "33166",
            addressCountry: "US",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Panama City",
            addressCountry: "PA",
          },
        ],
        areaServed: "Worldwide",
        knowsAbout: [
          "Aircraft transactions",
          "Vessel and yacht brokerage",
          "Premium real estate",
          "Gold and precious metals",
          "Oil and energy markets",
          "Digital assets",
          "Complex transaction advisory",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://msgltd.net/#website",
        url: "https://msgltd.net",
        name: "Middleton Services Group LTD",
        publisher: { "@id": "https://msgltd.net/#organization" },
        inLanguage: ["en", "es"],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://msgltd.net/#service",
        name: "Middleton Services Group LTD",
        url: `https://msgltd.net/${locale}`,
        description: dict.meta.ogDescription,
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Miami",
            addressRegion: "FL",
            postalCode: "33166",
            addressCountry: "US",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Panama City",
            addressCountry: "PA",
          },
        ],
        areaServed: "Worldwide",
        parentOrganization: { "@id": "https://msgltd.net/#organization" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: locale === "es" ? "Mesas de asesoría" : "Advisory desks",
          itemListElement: dict.services.items.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
            },
          })),
        },
      },
    ],
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Header locale={lang} dict={dict.nav} />
      <main>
        <HeroSection dict={dict.hero} />
        <Ticker locale={lang} dict={dict.ticker} />
        <AboutSection dict={dict.about} />
        <ServicesSection dict={dict.services} />
        <MarketWatchSection locale={lang} dict={dict.news} />
        <ContactSection locale={lang} dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} nav={dict.nav} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData(lang, dict)),
        }}
      />
    </>
  );
}
