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
