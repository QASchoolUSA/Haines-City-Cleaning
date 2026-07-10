import ResidentialCleaningContent from "@/components/ResidentialCleaningContent";
import Icon, { type IconName } from "@/components/Icon";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import ServiceHeroImage from "@/components/ServiceHeroImage";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Residential Cleaning Services in Haines City, FL",
  description:
    "Residential cleaning in Haines City: recurring home maintenance, deep cleaning, move-in/out, and apartment cleaning. Professional maid service by Haines City Cleaning.",
  path: "/residential-cleaning",
  ogImage: "/og/residential-cleaning.jpg",
  keywords: [
    "residential cleaning haines city",
    "home cleaning haines city",
    "apartment cleaning haines city",
    "deep cleaning",
    "move-in move-out cleaning",
    "polk county cleaning",
  ],
});

const whatsIncluded: { icon: IconName; text: string }[] = [
  { icon: "sparkles", text: "Standard & deep cleaning options" },
  { icon: "home", text: "Move-in/out specialized cleaning" },
  { icon: "check", text: "Kitchen & appliance fronts, counters, sinks" },
  { icon: "check", text: "Bathrooms: showers, tubs, mirrors, fixtures" },
  { icon: "check", text: "Living areas & bedrooms: dusting, surfaces, floors" },
  { icon: "check", text: "Add-ons: inside fridge/oven, interior windows, baseboards" },
];

const whyChoose: { icon: IconName; text: string }[] = [
  { icon: "star", text: "Local team serving Haines City and nearby areas" },
  { icon: "clock", text: "Flexible recurring and one-time bookings" },
  { icon: "shield", text: "Clear pricing and fast online quotes" },
  { icon: "star", text: "Insured, vetted cleaners you can trust" },
];

const faqs = [
  { q: "Do you provide supplies and equipment?", a: "Yes. We bring professional supplies and equipment to every job." },
  { q: "Can I schedule recurring cleanings?", a: "Yes. Weekly, bi‑weekly, monthly, or one‑time service is available." },
  { q: "Are appliance interiors included?", a: "For residential service, appliance interiors are add‑ons you can request." },
  { q: "Which areas do you serve?", a: "Haines City, Davenport, Winter Haven, Lakeland, and nearby Polk County communities." },
];

export default function Residential() {
  return (
    <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-0 sm:px-6 lg:px-8">
      <ServiceJsonLd
        name="Residential Cleaning Services"
        description="Professional residential cleaning in Haines City. Recurring, deep, and move-in/out options."
        path="/residential-cleaning"
      />
      <section>
        <article className="rounded-2xl bg-white p-8">
          <div className="space-y-12 divide-y divide-slate-100">
            <header className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Residential Cleaning Services in Haines City, FL</h1>
              <p className="text-slate-700">Recurring home maintenance, deep cleans, and move‑in/out options tailored to your household — not just one-time maid visits.</p>
              <div className="pt-4">
                <Link href="#booking" className="inline-flex rounded-full bg-[#FF7A00] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730]">Get a fast quote</Link>
              </div>
              <ServiceHeroImage image="residential" caption="Recurring residential cleaning for Haines City homes" />
            </header>

            <div className="pt-8 bg-[#FFB730]/10 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-slate-900">What&apos;s Included</h2>
              <p className="mt-2 max-w-2xl text-slate-700">From weekly upkeep to seasonal deep cleans, kitchens, bathrooms, living areas, and bedrooms—every detail handled by vetted pros.</p>
              <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-slate-700 sm:grid-cols-2">
                {whatsIncluded.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon} className="h-5 w-5 flex-shrink-0 text-[#FF7A00]" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">How It Works</h2>
              <ol className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A00] text-white">1</div><p className="mt-3 text-sm text-slate-700">Tell us about your home and preferred schedule.</p></li>
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A00] text-white">2</div><p className="mt-3 text-sm text-slate-700">We match you with a trusted Haines City cleaner.</p></li>
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A00] text-white">3</div><p className="mt-3 text-sm text-slate-700">Relax—your space is cleaned to a professional standard.</p></li>
              </ol>
            </div>

            <div className="pt-8 bg-[#FFB730]/10 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-slate-900">Why Choose Haines City Cleaning</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-slate-700 sm:grid-cols-2">
                {whyChoose.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon} className="h-5 w-5 flex-shrink-0 text-[#FF7A00]" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Residential vs. House Cleaning</h2>
              <p className="mt-3 text-slate-700">Looking for reliable <strong>residential cleaning in Haines City</strong>? This page covers recurring schedules, apartments, and whole-home maintenance. For one-time maid service or deep cleans, see our <Link href="/house-cleaning" className="font-medium text-[#FF7A00] hover:underline">house cleaning</Link> page.</p>
              <p className="mt-3 text-slate-700">We also offer <Link href="/move-out-cleaning" className="font-medium text-[#FF7A00] hover:underline">move‑out</Link> and <Link href="/move-in-cleaning" className="font-medium text-[#FF7A00] hover:underline">move‑in cleaning</Link> for transitions.</p>
            </div>
            <div className="pt-8">
              <ResidentialCleaningContent />
            </div>
            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">FAQs</h2>
              <div className="mt-4">
                {faqs.map((f) => (
                  <Accordion key={f.q} title={f.q}>
                    {f.a}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-16 bg-[#FF7A00]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h3 className="text-xl font-semibold text-white">Ready for a spotless space?</h3>
            <Link href="#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#FF7A00] shadow-sm hover:bg-[#FFB730]/10">Get a quote</Link>
          </div>
        </div>
      </section>

      <ServiceBookingSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Residential Cleaning", path: "/residential-cleaning" }])) }} />
    </main>
  );
}
