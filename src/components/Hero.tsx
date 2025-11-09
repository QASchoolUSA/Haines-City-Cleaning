import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFB730]/20 to-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Professional Cleaning Services in Haines City, FL.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Haines City Cleaning delivers reliable, high‑quality residential, commercial, and post‑construction cleaning. Flexible scheduling, vetted pros, and a fast quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#booking" className="rounded-full bg-[#FF7A00] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730]">Get a fast quote</Link>
            <Link href="#services" className="rounded-full border border-[#FF7A00] px-6 py-3 text-sm font-semibold text-[#FF7A00] hover:bg-[#FFB730]/10">Explore services</Link>
          </div>
        </div>
      </div>
    </section>
  );
}