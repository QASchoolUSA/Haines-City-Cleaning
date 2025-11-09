import ResidentialCleaningContent from "@/components/ResidentialCleaningContent";
import Icon, { type IconName } from "@/components/Icon";

export const metadata = {
  title: "Residential Cleaning in Haines City",
  description:
    "Residential cleaning in Haines City: house cleaning, deep cleaning, move-in/out, apartment cleaning. Professional maid service by Haines City Cleaning.",
  alternates: {
    canonical: "/residential-cleaning",
  },
  keywords: [
    "residential cleaning haines city",
    "house cleaning haines city",
    "haines city cleaning",
    "maid service haines city",
    "home cleaning haines city",
    "apartment cleaning haines city",
    "deep cleaning",
    "move-in move-out cleaning",
    "polk county cleaning",
  ],
};

const whatsIncluded: { icon: IconName; text: string }[] = [
  { icon: "sparkles", text: "Standard & deep cleaning options" },
  { icon: "home", text: "Move-in/out specialized cleaning" },
  { icon: "check", text: "Kitchen & appliance fronts, counters, sinks" },
  { icon: "check", text: "Bathrooms: showers, tubs, mirrors, fixtures" },
  { icon: "check", text: "Living areas & bedrooms: dusting, surfaces, floors" },
  { icon: "check", text: "Add-ons: inside fridge/oven, interior windows, baseboards" },
];

const whyChoose: { icon: IconName; text: string }[] = [
  { icon: "star", text: "Local team serving Haines City and nearby areas" },
  { icon: "clock", text: "Flexible recurring and one-time bookings" },
  { icon: "shield", text: "Clear pricing and fast online quotes" },
  { icon: "star", text: "Insured, vetted cleaners you can trust" },
];

export default function Residential() {
  return (
    <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
      <section>
        <article className="rounded-2xl bg-white p-8">
          <div className="space-y-12 divide-y divide-slate-100">
            <header className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Residential Cleaning</h1>
              <p className="text-slate-700">Professional house cleaning in Haines City—recurring, deep, and move‑in/out options tailored to your home.</p>
              <div className="pt-4">
        <a href="/#booking" className="inline-flex rounded-full bg-[#FF7A00] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730]">Get a fast quote</a>
              </div>
            </header>

            <div className="pt-8 bg-[#FFB730]/10 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-slate-900">What’s Included</h2>
              <p className="mt-2 max-w-2xl text-slate-700">From weekly upkeep to seasonal deep cleans, kitchens, bathrooms, living areas, and bedrooms—every detail handled by vetted pros.</p>
              <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-slate-700 sm:grid-cols-2">
                {whatsIncluded.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon} className="h-5 w-5 flex-shrink-0 text-[#FF7A00]" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">How It Works</h2>
              <ol className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A00] text-white">1</div><p className="mt-3 text-sm text-slate-700">Tell us about your home and preferred schedule.</p></li>
        <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A00] text-white">2</div><p className="mt-3 text-sm text-slate-700">We match you with a trusted Haines City cleaner.</p></li>
        <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF7A00] text-white">3</div><p className="mt-3 text-sm text-slate-700">Relax—your space is cleaned to a professional standard.</p></li>
              </ol>
            </div>

            <div className="pt-8 bg-[#FFB730]/10 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-slate-900">Why Choose Haines City Cleaning</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-slate-700 sm:grid-cols-2">
                {whyChoose.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon} className="h-5 w-5 flex-shrink-0 text-[#FF7A00]" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Residential Cleaning in Haines City</h2>
              <p className="mt-3 text-slate-700">Looking for reliable <strong>residential cleaning in Haines City</strong>? Our local team provides professional <strong>house cleaning</strong> tailored to your home—weekly, bi‑weekly, monthly, or one‑time deep cleans. We cover kitchens, bathrooms, living spaces, and bedrooms with careful attention to detail.</p>
              <p className="mt-3 text-slate-700">Choose Haines City Cleaning for trusted <strong>Haines City cleaning</strong> services, including <strong>move‑in/move‑out cleaning</strong> and <strong>apartment cleaning</strong>. Get a fast quote online and enjoy a spotless space from a team that respects your time and home.</p>
              <p className="mt-3 text-slate-700">Popular searches: <em>residential cleaning Haines City</em>, <em>house cleaning Haines City</em>, _maid service Haines City_, _home cleaning Haines City_, _Haines City cleaning company_.</p>
            </div>
            <div className="pt-8">
              <ResidentialCleaningContent />
            </div>
          </div>
        </article>
      </section>

      {/* CTA band to match Home styling */}
      <section className="mt-16 bg-[#FF7A00]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h3 className="text-xl font-semibold text-white">Ready for a spotless space?</h3>
          <a href="/#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#FF7A00] shadow-sm hover:bg-[#FFB730]/10">Get a quote</a>
          </div>
        </div>
      </section>
    </main>
  );
}