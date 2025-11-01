import Link from "next/link";

const services = [
  {
    key: "residential",
    title: "Residential Cleaning",
    desc: "Standard, deep, and move‑in/out cleaning tailored to your home.",
    href: "/services/residential",
    icon: "🏠",
  },
  {
    key: "commercial",
    title: "Commercial Cleaning",
    desc: "Offices, retail, and shared spaces—consistent and professional.",
    href: "/services/commercial",
    icon: "🏢",
  },
  {
    key: "post-construction",
    title: "Post‑Construction",
    desc: "Dust removal, detailing, and handover‑ready finishing cleans.",
    href: "/services/post-construction",
    icon: "🛠️",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Services</h2>
            <p className="mt-2 text-slate-700">Three specialized offerings to fit every need.</p>
          </div>
          <Link href="#booking" className="hidden rounded-full bg-[#FF7A00] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730] sm:inline-block">Get a quote</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.key} href={s.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#FFB730]/20 text-lg">{s.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#FF7A00]">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-700">{s.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#FF7A00]">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}