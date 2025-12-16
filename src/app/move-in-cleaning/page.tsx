import Icon, { type IconName } from "@/components/Icon";
import Link from "next/link";

export const metadata = {
  title: "Move In Cleaning Haines City, FL | New Home Deep Cleaning",
  description:
    "Professional move-in cleaning in Haines City. New home deep cleaning to ensure a fresh, sanitized start. Ideal for homeowners, tenants, and realtors.",
  alternates: {
    canonical: "/move-in-cleaning",
  },
  keywords: [
    "move in cleaning haines city",
    "new home cleaning haines city",
    "apartment move in cleaning",
    "deep cleaning haines city",
    "vacancy cleaning",
    "rental cleaning haines city",
  ],
};

const checklist: { icon: IconName; title: string; desc: string }[] = [
  { icon: "sparkles", title: "Sanitize Kitchens & Bathrooms", desc: "Disinfect counters, sinks, fixtures, and appliance fronts." },
  { icon: "check", title: "Inside Cabinets & Drawers", desc: "Wipe inside all kitchen and bathroom storage." },
  { icon: "check", title: "Appliances Inside & Out", desc: "Deep clean fridge, oven, and microwave interiors." },
  { icon: "check", title: "Dust & Detail Entire Home", desc: "Fans, vents, baseboards, window sills, and trim." },
  { icon: "home", title: "Floors Thoroughly Cleaned", desc: "Vacuum and mop hard floors; vacuum carpets." },
  { icon: "star", title: "Fresh, Move‑In Ready Finish", desc: "Leave your new home spotless and hygienic." },
];

const faqs = [
  { q: "What does a move‑in cleaning include?", a: "A deep clean of kitchens, bathrooms, living areas, bedrooms, inside cabinets and drawers, appliance interiors, dusting and detailing, and thorough floor care." },
  { q: "Do you clean inside the fridge and oven?", a: "Yes. Appliance interiors are part of our standard move‑in scope so your kitchen is fresh and ready to use." },
  { q: "How far in advance should I book?", a: "Book as early as possible. We can often accommodate next‑day service for Haines City and nearby areas." },
  { q: "Do you bring supplies and equipment?", a: "Yes. We provide professional supplies and equipment for a complete, move‑in ready finish." },
];

export default function MoveInCleaning() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hainescitycleaning.com/" },
      { "@type": "ListItem", "position": 2, "name": "Move In Cleaning", "item": "https://hainescitycleaning.com/move-in-cleaning" }
    ]
  };

  return (
    <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
      <section>
        <article className="rounded-2xl bg-white p-8">
          <div className="space-y-12 divide-y divide-slate-100">
            <header className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Move In Cleaning in Haines City</h1>
              <p className="text-slate-700">Start fresh in your new home with a thorough, hygienic clean by local professionals.</p>
              <div className="pt-4">
                <Link href="/#booking" className="inline-flex rounded-full bg-[#FF7A00] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730]">Book move‑in clean</Link>
              </div>
            </header>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Why Move‑In Cleaning Matters</h2>
              <p className="mt-3 text-slate-700">Our team delivers detailed <strong>move in cleaning in Haines City</strong> so every surface feels new. We deep clean kitchens and bathrooms, dust and detail, and handle appliance interiors for a truly fresh start.</p>
              <p className="mt-3 text-slate-700">Serving Haines City, Davenport, Lake Hamilton, and nearby communities.</p>
            </div>

            <div className="pt-8 bg-[#FFB730]/10 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-slate-900">Move‑In Deep Cleaning Checklist</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {checklist.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      <Icon name={item.icon} className="h-5 w-5 text-[#FF7A00]" />
                      {item.title}
                    </div>
                    <p className="text-sm text-slate-700 pl-7">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">FAQs</h2>
              <div className="mt-4 space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="border-b border-slate-200">
                    <div className="py-3 font-semibold text-slate-900">{f.q}</div>
                    <div className="pb-4 text-slate-700">{f.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-16 bg-[#FF7A00]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h3 className="text-xl font-semibold text-white">Move into a spotless home</h3>
            <Link href="/#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#FF7A00] shadow-sm hover:bg-[#FFB730]/10">Get a quote</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </main>
  );
}
