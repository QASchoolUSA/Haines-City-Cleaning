import CommercialCleaningContent from "@/components/CommercialCleaningContent";
import Icon, { type IconName } from "@/components/Icon";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import ServiceJsonLd from "@/components/ServiceJsonLd";

export const metadata = {
  title: "Commercial Cleaning in Haines City",
  description:
    "Commercial cleaning in Haines City: office cleaning, janitorial services, retail and shared areas with flexible schedules.",
  alternates: {
    canonical: "/commercial-cleaning",
  },
  keywords: [
    "commercial cleaning haines city",
    "office cleaning haines city",
    "janitorial services haines city",
    "haines city cleaning",
    "business cleaning",
    "commercial janitorial",
    "post-build turnover",
  ],
};

const servicesSchedules: { icon: IconName; text: string }[] = [
  { icon: "clock", text: "Custom schedules: daily, weekly, bi-weekly" },
  { icon: "check", text: "Restrooms, floors, breakrooms, glass & touchpoints" },
  { icon: "home", text: "Lobbies, conference rooms, shared areas" },
  { icon: "sparkles", text: "Move-in/out and post-build turnover available" },
];

export default function Commercial() {
  const faqs = [
    { q: "Do you offer after-hours cleaning?", a: "Yes. We align with your operating hours and security requirements." },
    { q: "Are supplies and equipment provided?", a: "Yes. We bring professional-grade supplies and equipment." },
    { q: "Can you handle large office suites?", a: "Yes. We service small offices, large suites, and shared areas." },
    { q: "Do you provide one-time or recurring service?", a: "Both. Daily, weekly, bi-weekly, and as‑needed options." },
  ];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hainescitycleaning.com/" },
      { "@type": "ListItem", "position": 2, "name": "Commercial Cleaning", "item": "https://hainescitycleaning.com/commercial-cleaning" }
    ]
  };
  return (
    <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
      <ServiceJsonLd
        name="Commercial Cleaning Services"
        description="Professional commercial cleaning for offices and businesses in Haines City."
        url="https://hainescitycleaning.com/commercial-cleaning"
        type="Service"
      />
      <section>
        <article className="rounded-2xl bg-white p-8">
          <div className="space-y-12 divide-y divide-slate-100">
            <header className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Commercial Cleaning</h1>
              <p className="text-slate-700">Office suites, retail, and shared areas—consistent cleaning on your schedule.</p>
              <div className="pt-4">
                <Link href="/#booking" className="inline-flex rounded-full bg-[#FF7A00] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730]">Get a fast quote</Link>
              </div>
            </header>

            <div className="pt-8 bg-[#FFB730]/10 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-slate-900">Services & Schedules</h2>
              <p className="mt-2 max-w-2xl text-slate-700">Reliable daily, weekly, or as‑needed service with attention to high‑traffic zones and touchpoints. We align with your hours and security needs.</p>
              <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-slate-700 sm:grid-cols-2">
                {servicesSchedules.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon} className="h-5 w-5 flex-shrink-0 text-[#FF7A00]" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Our Process</h2>
              <ol className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A00] text-white">1</div><p className="mt-3 text-sm text-slate-700">Walkthrough and scope confirmation.</p></li>
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A00] text-white">2</div><p className="mt-3 text-sm text-slate-700">Schedule alignment and access coordination.</p></li>
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A00] text-white">3</div><p className="mt-3 text-sm text-slate-700">Ongoing cleaning with quality checks.</p></li>
              </ol>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Commercial Cleaning in Haines City</h2>
              <p className="mt-3 text-slate-700">We provide dependable <strong>commercial cleaning in Haines City</strong> for offices, retail, and shared spaces. Our janitorial team manages floors, restrooms, breakrooms, glass, and touchpoints to keep your workplace clean and safe.</p>
              <p className="mt-3 text-slate-700">Whether you need daily service or flexible schedules, choose <strong>Haines City Cleaning</strong> for professional <strong>office cleaning</strong> and <strong>janitorial services</strong>. We coordinate with your hours and security requirements for a smooth operation.</p>
              <p className="mt-3 text-slate-700">Popular searches: <em>commercial cleaning Haines City</em>, <em>office cleaning Haines City</em>, <em>janitorial services Haines City</em>, <em>Haines City cleaning</em>, <em>business cleaning</em>.</p>
            </div>
            <div className="pt-8">
              <CommercialCleaningContent />
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

      {/* CTA band to match Home styling */}
      <section className="mt-16 bg-[#FF7A00]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h3 className="text-xl font-semibold text-white">Ready for a spotless space?</h3>
            <Link href="/#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#FF7A00] shadow-sm hover:bg-[#FFB730]/10">Get a quote</Link>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    </main>
  );
}
