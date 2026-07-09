import Link from "next/link";

const services = [
  {
    key: "residential",
    title: "Residential Cleaning",
    desc: "Recurring home maintenance for a consistently clean space.",
    href: "/residential-cleaning",
    cta: "Residential cleaning in Haines City",
    icon: "🏠",
  },
  {
    key: "house",
    title: "House Cleaning",
    desc: "Detailed maid service for one-time deep or standard cleanings.",
    href: "/house-cleaning",
    cta: "House cleaning & maid service",
    icon: "🧹",
  },
  {
    key: "move-out",
    title: "Move Out Cleaning",
    desc: "Vacancy cleaning to help you secure your security deposit.",
    href: "/move-out-cleaning",
    cta: "Move-out cleaning services",
    icon: "📦",
  },
  {
    key: "move-in",
    title: "Move In Cleaning",
    desc: "New home deep cleaning for a fresh, sanitized start.",
    href: "/move-in-cleaning",
    cta: "Move-in deep cleaning",
    icon: "🔑",
  },
  {
    key: "commercial",
    title: "Commercial Cleaning",
    desc: "Offices, retail, and shared spaces—consistent and professional.",
    href: "/commercial-cleaning",
    cta: "Commercial & office cleaning",
    icon: "🏢",
  },
  {
    key: "post-construction",
    title: "Post‑Construction",
    desc: "Dust removal, detailing, and handover‑ready finishing cleans.",
    href: "/post-construction-cleaning",
    cta: "Post-construction cleanup",
    icon: "🛠️",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow">What we offer</p>
            <h2 className="section-title mt-2">Our Services</h2>
            <p className="section-subtitle">Specialized offerings to fit every need.</p>
          </div>
          <Link href="#booking" className="btn-primary hidden shrink-0 sm:inline-flex">Get a quote</Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.key} href={s.href} className="card card-hover group flex flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFB730]/25 to-[#FF7A00]/10 text-xl transition group-hover:from-[#FFB730]/35 group-hover:to-[#FF7A00]/15">
                  {s.icon}
                </div>
                <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400 transition group-hover:bg-[#FFB730]/15 group-hover:text-[#FF7A00]">
                  Learn more
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900 transition group-hover:text-[#FF7A00]">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#FF7A00]">
                {s.cta}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-0.5">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link href="#booking" className="btn-primary">Get a quote</Link>
        </div>
      </div>
    </section>
  );
}
