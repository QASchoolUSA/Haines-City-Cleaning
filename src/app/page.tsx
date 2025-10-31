import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import BookingWidget from "@/components/BookingWidget";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Benefits />
      <BookingWidget />
      <Testimonials />
      <section className="bg-purple-600">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h3 className="text-xl font-semibold text-white">Ready for a spotless space?</h3>
            <a href="#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-purple-700 shadow-sm hover:bg-purple-50">Get a quote</a>
          </div>
        </div>
      </section>
    </main>
  );
}
