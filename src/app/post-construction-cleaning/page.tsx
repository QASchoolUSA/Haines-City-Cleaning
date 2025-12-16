import PostConstructionCleaningContent from "@/components/PostConstructionCleaningContent";
import Icon, { type IconName } from "@/components/Icon";
import Accordion from "@/components/Accordion";
import Link from "next/link";

export const metadata = {
  title: "Post‑Construction Cleaning in Haines City",
  description:
    "Post construction cleaning in Haines City: builder cleanup, renovation dust removal, final detailing for residential and commercial projects.",
  alternates: {
    canonical: "/post-construction-cleaning",
  },
  keywords: [
    "post construction cleaning haines city",
    "construction cleanup haines city",
    "builder cleaning",
    "final cleaning",
    "renovation cleaning",
    "haines city cleaning",
  ],
};

const scopeDetailing: { icon: IconName; text: string }[] = [
  { icon: "sparkles", text: "Dust removal and fine detailing" },
  { icon: "check", text: "Interior windows, fixtures, and surfaces" },
  { icon: "check", text: "Floor care and touchpoint cleaning" },
  { icon: "home", text: "Flexible scope for residential and commercial builds" },
];

export default function PostConstruction() {
  const faqs = [
    { q: "Do you handle fine dust removal?", a: "Yes. We target fine dust on surfaces, fixtures, vents, and window sills." },
    { q: "Is interior window cleaning included?", a: "Yes. Interior glass, frames, and sills are included in our detailing scope." },
    { q: "Do you clean for both residential and commercial?", a: "Yes. We support both residential and commercial post‑builds." },
    { q: "Can you work on tight timelines?", a: "Yes. We align schedules to meet handover deadlines." },
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
      { "@type": "ListItem", "position": 2, "name": "Post‑Construction Cleaning", "item": "https://hainescitycleaning.com/post-construction-cleaning" }
    ]
  };
  return (
    <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
      <section>
        <article className="rounded-2xl bg-white p-8">
          <div className="space-y-12 divide-y divide-slate-100">
            <header className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Post‑Construction Cleaning</h1>
              <p className="text-slate-700">Final detailing for newly built or renovated spaces—handover ready.</p>
              <div className="pt-4">
                <Link href="/#booking" className="inline-flex rounded-full bg-[#FF7A00] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730]">Get a fast quote</Link>
              </div>
            </header>

            <div className="pt-8 bg-[#FFB730]/10 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-slate-900">Scope & Detailing</h2>
              <p className="mt-2 max-w-2xl text-slate-700">We remove fine dust, debris, and residue, leaving pristine floors, fixtures, and surfaces. Flexible scopes for residential and commercial builds.</p>
              <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-slate-700 sm:grid-cols-2">
                {scopeDetailing.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon} className="h-5 w-5 flex-shrink-0 text-[#FF7A00]" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">How We Deliver</h2>
              <ol className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A00] text-white">1</div><p className="mt-3 text-sm text-slate-700">Construction walkthrough and scope planning.</p></li>
        <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A00] text-white">2</div><p className="mt-3 text-sm text-slate-700">Dust removal, debris disposal, detailed surface cleaning.</p></li>
        <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A00] text-white">3</div><p className="mt-3 text-sm text-slate-700">Final checks and handover-ready presentation.</p></li>
              </ol>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Post Construction Cleaning in Haines City</h2>
              <p className="mt-3 text-slate-700">Our team specializes in <strong>post construction cleaning in Haines City</strong>, handling fine dust, residue, and heavy debris so your new build or renovation is move‑in ready. We deliver careful <strong>builder cleaning</strong> with professional tools and a meticulous approach.</p>
              <p className="mt-3 text-slate-700">Choose <strong>Haines City Cleaning</strong> for reliable <strong>construction cleanup</strong> and final detailing. We support residential and commercial projects with flexible scheduling and clear communication.</p>
              <p className="mt-3 text-slate-700">Popular searches: <em>post construction cleaning Haines City</em>, <em>construction cleanup Haines City</em>, <em>builder cleaning</em>, <em>final cleaning</em>, <em>Haines City cleaning</em>.</p>
            </div>
            <div className="pt-8">
              <PostConstructionCleaningContent />
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
