const benefits = [
  { title: "Licensed & Insured", desc: "Your property is protected and our team is vetted." },
  { title: "Flexible Scheduling", desc: "Book around your calendar with weekend availability." },
  { title: "Eco‑Friendly Options", desc: "Green products available on request for a healthier home." },
  { title: "Satisfaction Guaranteed", desc: "We fix anything you’re not happy with—no questions." },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-purple-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Why Choose Us</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}