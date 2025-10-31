export const metadata = {
  title: "Commercial Cleaning in Haines City | Haines City Cleaning",
  description:
    "Commercial cleaning in Haines City: office cleaning, janitorial services, retail and shared areas with flexible schedules.",
  keywords: [
    "commercial cleaning haines city",
    "office cleaning haines city",
    "janitorial services haines city",
    "haines city cleaning",
    "business cleaning",
    "commercial janitorial",
    "post-build turnover",
  ],
};

function ShapeTop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-10">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-24 w-full">
        <defs>
          <linearGradient id="comm-top" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
        <path d="M0,120 C300,20 1140,20 1440,120 L1440,0 L0,0 Z" fill="url(#comm-top)" />
      </svg>
    </div>
  );
}

function ShapeBottom() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-10">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-24 w-full">
        <defs>
          <linearGradient id="comm-bottom" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
        </defs>
        <path d="M0,0 C300,100 1140,100 1440,0 L1440,120 L0,120 Z" fill="url(#comm-bottom)" />
      </svg>
    </div>
  );
}

export default function Commercial() {
  return (
    <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
      <section>
        <article className="rounded-2xl bg-white p-8">
          <div className="space-y-12 divide-y divide-slate-100">
            <header className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Commercial Cleaning</h1>
              <p className="text-slate-700">Office suites, retail, and shared areas—consistent cleaning on your schedule.</p>
              <div className="pt-4">
                <a href="/#booking" className="inline-flex rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-700">Get a fast quote</a>
              </div>
            </header>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Services & Schedules</h2>
              <p className="mt-2 max-w-2xl text-slate-700">Reliable daily, weekly, or as‑needed service with attention to high‑traffic zones and touchpoints. We align with your hours and security needs.</p>
              <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-purple-600"></span> Custom schedules: daily, weekly, bi‑weekly</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-purple-600"></span> Restrooms, floors, breakrooms, glass & touchpoints</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-purple-600"></span> Lobbies, conference rooms, shared areas</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-purple-600"></span> Move‑in/out and post‑build turnover available</li>
              </ul>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Our Process</h2>
              <ol className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">1</div><p className="mt-3 text-sm text-slate-700">Walkthrough and scope confirmation.</p></li>
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">2</div><p className="mt-3 text-sm text-slate-700">Schedule alignment and access coordination.</p></li>
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white">3</div><p className="mt-3 text-sm text-slate-700">Ongoing cleaning with quality checks.</p></li>
              </ol>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Commercial Cleaning in Haines City</h2>
              <p className="mt-3 text-slate-700">We provide dependable <strong>commercial cleaning in Haines City</strong> for offices, retail, and shared spaces. Our janitorial team manages floors, restrooms, breakrooms, glass, and touchpoints to keep your workplace clean and safe.</p>
              <p className="mt-3 text-slate-700">Whether you need daily service or flexible schedules, choose <strong>Haines City Cleaning</strong> for professional <strong>office cleaning</strong> and <strong>janitorial services</strong>. We coordinate with your hours and security requirements for a smooth operation.</p>
              <p className="mt-3 text-slate-700">Popular searches: <em>commercial cleaning Haines City</em>, <em>office cleaning Haines City</em>, <em>janitorial services Haines City</em>, <em>Haines City cleaning</em>, <em>business cleaning</em>.</p>
            </div>
          </div>
        </article>
      </section>

      {/* CTA band to match Home styling */}
      <section className="mt-16 bg-purple-600">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <h3 className="text-xl font-semibold text-white">Ready for a spotless space?</h3>
            <a href="/#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-purple-700 shadow-sm hover:bg-purple-50">Get a quote</a>
          </div>
        </div>
      </section>
    </main>
  );
}