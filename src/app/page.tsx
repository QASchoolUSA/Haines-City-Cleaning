import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import HouseCleaningArticle from "@/components/HouseCleaningArticle";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Benefits />
      <HouseCleaningArticle />
      <Testimonials />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Professional Cleaning Services in Haines City, FL</h2>
          <p className="mt-3 text-slate-700">Haines City Cleaning provides <strong>professional cleaning services in Haines City</strong> for homes and businesses. Explore our <a href="/house-cleaning" className="text-[#FF7A00] hover:underline">house cleaning</a>, <a href="/residential-cleaning" className="text-[#FF7A00] hover:underline">residential cleaning</a>, <a href="/commercial-cleaning" className="text-[#FF7A00] hover:underline">commercial cleaning</a>, <a href="/move-out-cleaning" className="text-[#FF7A00] hover:underline">move‑out cleaning</a>, <a href="/move-in-cleaning" className="text-[#FF7A00] hover:underline">move‑in cleaning</a>, and <a href="/post-construction-cleaning" className="text-[#FF7A00] hover:underline">post‑construction cleaning</a>.</p>
          <p className="mt-3 text-slate-700">Serving Haines City, Davenport, and nearby Polk County communities with reliable scheduling and vetted local cleaners.</p>
        </div>
      </section>
      <section className="bg-[#FF7A00]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h3 className="text-xl font-semibold text-white">Ready for a spotless space?</h3>
            <a href="#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#FF7A00] shadow-sm hover:bg-[#FFB730]/10">Get a quote</a>
          </div>
        </div>
      </section>
    </main>
  );
}
