import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { baseCommercial, basePost, baseResidential } from "@/lib/pricing-display";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import { siteImages } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Cleaning Service Prices in Haines City, FL",
  description:
    "Transparent cleaning prices for Haines City homes and businesses. Residential, commercial, and post-construction rates with instant online quotes.",
  path: "/pricing",
  ogImage: "/og/pricing.jpg",
  keywords: [
    "house cleaning cost haines city",
    "cleaning prices haines city fl",
    "maid service prices",
    "commercial cleaning rates",
  ],
});

export default function PricingPage() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Transparent pricing</p>
            <h1 className="section-title mt-2">Cleaning Service Prices in Haines City, FL</h1>
            <p className="section-subtitle">
              Starting rates for common jobs. Your final quote depends on size, level, and add-ons — get an
              instant estimate online.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/80">
            <Image
              src={siteImages.stagedLiving.src}
              alt={siteImages.stagedLiving.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <section className="card p-6">
            <h2 className="text-xl font-bold text-slate-900">Residential</h2>
            <p className="mt-2 text-sm text-slate-600">Standard home cleaning by bedroom count.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {Object.entries(baseResidential).map(([key, price]) => (
                <li key={key} className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="capitalize">{key.replace("bed", " bed").replace("plus", "+")}</span>
                  <span className="font-semibold text-[#FF7A00]">from ${price}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/residential-cleaning"
              className="mt-6 inline-flex text-sm font-semibold text-[#FF7A00] hover:underline"
            >
              Residential cleaning details →
            </Link>
          </section>

          <section className="card p-6">
            <h2 className="text-xl font-bold text-slate-900">Commercial</h2>
            <p className="mt-2 text-sm text-slate-600">Office and business cleaning by square footage.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {Object.entries(baseCommercial).map(([key, price]) => (
                <li key={key} className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="capitalize">{key}</span>
                  <span className="font-semibold text-[#FF7A00]">from ${price}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/commercial-cleaning"
              className="mt-6 inline-flex text-sm font-semibold text-[#FF7A00] hover:underline"
            >
              Commercial cleaning details →
            </Link>
          </section>

          <section className="card p-6">
            <h2 className="text-xl font-bold text-slate-900">Post-Construction</h2>
            <p className="mt-2 text-sm text-slate-600">Builder cleanup and renovation dust removal.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {Object.entries(basePost).map(([key, price]) => (
                <li key={key} className="flex justify-between border-b border-slate-100 pb-2">
                  <span>
                    {key
                      .replace("under1k", "Under 1k sqft")
                      .replace("1k-2k", "1k–2k sqft")
                      .replace("over2k", "2k+ sqft")}
                  </span>
                  <span className="font-semibold text-[#FF7A00]">from ${price}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/post-construction-cleaning"
              className="mt-6 inline-flex text-sm font-semibold text-[#FF7A00] hover:underline"
            >
              Post-construction details →
            </Link>
          </section>
        </div>

        <div className="mt-10 rounded-2xl bg-[#FFB730]/10 p-8">
          <h2 className="text-lg font-semibold text-slate-900">Premiums &amp; add-ons</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            <li>Deep clean: ~40% above standard</li>
            <li>Move-in / move-out: ~20% above standard</li>
            <li>Airbnb / turnover: quote by size + same-day SLA</li>
            <li>Inside fridge or oven: +$25 each</li>
            <li>Interior windows: +$40</li>
            <li>Inside cabinets: +$30</li>
            <li>Baseboards: +$35</li>
          </ul>
          <p className="mt-4 text-sm text-slate-600">
            Read our guides:{" "}
            <Link
              href="/blog/cost-of-house-cleaning-haines-city"
              className="font-medium text-[#FF7A00] hover:underline"
            >
              house cleaning cost
            </Link>
            {" · "}
            <Link
              href="/blog/airbnb-turnover-time-haines-city"
              className="font-medium text-[#FF7A00] hover:underline"
            >
              Airbnb turnover timing
            </Link>
            {" · "}
            <Link href="/airbnb-cleaning" className="font-medium text-[#FF7A00] hover:underline">
              Airbnb cleaning service
            </Link>
          </p>
        </div>
      </div>

      <ServiceBookingSection />
    </main>
  );
}
