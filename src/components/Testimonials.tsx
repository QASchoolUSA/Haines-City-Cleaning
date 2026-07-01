const testimonials = [
  {
    name: "Maria G.",
    quote: "They did an incredible deep clean before our move‑in. Floors and windows looked brand new!",
  },
  {
    name: "Trent P.",
    quote: "Reliable weekly office cleaning—our team notices the difference. Highly recommend.",
  },
  {
    name: "Sofia R.",
    quote: "Post‑construction dust everywhere—gone in a day. Fast and thorough service.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#FF7A00]" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Client stories</p>
          <h2 className="section-title mt-2">Happy Clients</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card flex flex-col p-6">
              <Stars />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FFB730] text-xs font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-slate-900">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
