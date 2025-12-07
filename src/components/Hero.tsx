import Link from "next/link";
import BookingWidget from "./BookingWidget";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFB730]/20 to-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Haines City Cleaning: Professional House & Commercial Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Trusted <strong>Haines City Cleaning</strong> services for residential, commercial, and post‑construction needs. We are your local experts for <strong>house cleaning in Haines City, FL</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#booking" className="rounded-full bg-[#FF7A00] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730]">Get a fast quote</Link>
              <Link href="#services" className="rounded-full border border-[#FF7A00] px-6 py-3 text-sm font-semibold text-[#FF7A00] hover:bg-[#FFB730]/10">Explore services</Link>
            </div>
          </div>
          <div id="booking">
            <BookingWidget />
          </div>
        </div>
      </div>
    </section>
  );
}