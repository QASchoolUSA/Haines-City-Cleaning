import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hainescitycleaning.com";

export const metadata: Metadata = {
  title: "About Haines City Cleaning",
  description:
    "Learn how Haines City Cleaning works: local Polk County crews, licensed and insured service, clear scopes, and a mobile service-area model across Haines City, Davenport, and Lake Hamilton.",
  alternates: { canonical: "/about" },
};

const differentiators = [
  {
    title: "Local Polk County focus",
    text: "We schedule around Haines City routes—not a national call center. That means faster response for homes near Davenport, Lake Hamilton, and nearby communities.",
  },
  {
    title: "Insured, background-checked crews",
    text: "Every visit is handled by trained cleaners who are fully insured and background-checked. Your home and keys are treated as a professional worksite, not a gig marketplace job.",
  },
  {
    title: "Clear scopes by service type",
    text: "House cleaning, move-in/out, commercial, and post-construction each get their own checklist. You know what is included before we arrive.",
  },
  {
    title: "Satisfaction-backed work",
    text: "If something was missed, tell us. We stand behind the clean and will make it right—no runaround.",
  },
];

export default function AboutPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Haines City Cleaning",
    url: SITE_URL,
    email: "hello@hainescitycleaning.com",
    telephone: "+18633587388",
    description:
      "Haines City Cleaning is a mobile, service-area business serving Haines City, Davenport, and Lake Hamilton, FL. We do not publish a public storefront address.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Haines City",
      addressRegion: "FL",
      postalCode: "33844",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Haines City" },
      { "@type": "City", name: "Davenport" },
      { "@type": "City", name: "Lake Hamilton" },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <header className="max-w-3xl">
        <p className="section-eyebrow">Haines City, FL · About us</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          A local cleaning company built for Polk County homes and businesses
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Haines City Cleaning provides residential, commercial, move, and post-construction cleaning
          across Haines City and nearby communities. We are a mobile service-area team—licensed,
          insured, and focused on showing up on time with a clear scope.
        </p>
      </header>

      <section className="mt-12 max-w-3xl space-y-5 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-slate-900">Who we are</h2>
        <p>
          We started as a practical answer to a common local problem: homeowners and property managers
          in Haines City needed reliable cleaners who would confirm the appointment, follow a real
          checklist, and communicate when plans change. National apps rotate anonymous workers.
          Big chains push scripts. We keep it local—one business, one phone number, and crews who
          know Polk County neighborhoods.
        </p>
        <p>
          Day to day, that means recurring house cleaning for busy households, vacancy and move cleans
          for landlords and realtors, commercial upkeep for offices and shared spaces, and detailed
          post-construction cleanup when renovations leave dust behind. Each service type has its own
          standards so a “quick refresh” is never confused with a builder final clean.
        </p>
        <p>
          Contact us anytime at{" "}
          <a href="mailto:hello@hainescitycleaning.com" className="font-medium text-[#FF7A00] hover:underline">
            hello@hainescitycleaning.com
          </a>{" "}
          or{" "}
          <a href="tel:+18633587388" className="font-medium text-[#FF7A00] hover:underline">
            (863) 358-7388
          </a>
          . Hours are Monday–Saturday, 8:00 AM–6:00 PM.
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-5 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-slate-900">How we work</h2>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong className="text-slate-900">Request a quote.</strong> Tell us the service type,
            property size, and preferred timing. We confirm what is included before you book.
          </li>
          <li>
            <strong className="text-slate-900">Confirm access and priorities.</strong> Share entry
            instructions, pet notes, and any rooms that need extra attention.
          </li>
          <li>
            <strong className="text-slate-900">We clean to the checklist.</strong> Our insured,
            background-checked team arrives with supplies and works room by room.
          </li>
          <li>
            <strong className="text-slate-900">You review the result.</strong> If something needs a
            touch-up, say so—we will make it right under our satisfaction guarantee.
          </li>
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">What makes us different</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-slate-900">Service-area policy</h2>
        <p>
          Haines City Cleaning is a mobile, service-area business serving Haines City, Davenport, and
          Lake Hamilton, FL. We do not publish a public storefront address. Crews travel to your home
          or workplace; quotes and scheduling happen by phone, email, or the online booking form on
          this site.
        </p>
        <p>
          We also reach nearby communities when routes allow—including Winter Haven, Lakeland, and
          Kissimmee. If you are unsure whether we cover your street, ask when you request a quote.
        </p>
      </section>

      <section className="mt-16 rounded-2xl bg-[#FF7A00] px-6 py-10 text-white sm:px-10">
        <h2 className="text-xl font-bold sm:text-2xl">Ready to book a cleaning?</h2>
        <p className="mt-2 max-w-xl text-sm text-white/90">
          Get a clear quote for house, move, commercial, or post-construction cleaning in Haines City.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/#booking"
            className="inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#FF7A00] transition hover:bg-slate-50"
          >
            Get a quote
          </Link>
          <a
            href="tel:+18633587388"
            className="inline-flex rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Call (863) 358-7388
          </a>
        </div>
      </section>
    </main>
  );
}
