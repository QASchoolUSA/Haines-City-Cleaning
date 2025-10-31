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

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Happy Clients</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <blockquote className="text-sm text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-slate-900">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}