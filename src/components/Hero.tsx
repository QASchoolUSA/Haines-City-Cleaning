import Link from "next/link";
import BookingWidget from "./BookingWidget";

const TRUST_ITEMS = [
  "Licensed & Insured",
  "Satisfaction Guaranteed",
  "Local Haines City Team",
];

export default function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FFB730]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#FF7A00]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl lg:pt-4">
            <p className="section-eyebrow">Haines City, FL · Polk County</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Haines City Cleaning: Professional House & Commercial Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Trusted <strong className="font-semibold text-slate-800">Haines City Cleaning</strong> services for residential, commercial, and post‑construction needs. We are your local experts for <strong className="font-semibold text-slate-800">house cleaning in Haines City, FL</strong>.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {TRUST_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF7A00]/10 text-[#FF7A00]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#booking" className="btn-primary">Get a fast quote</Link>
              <Link href="#services" className="btn-secondary">Explore services</Link>
            </div>
          </div>

          <div id="booking" className="lg:sticky lg:top-24">
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
