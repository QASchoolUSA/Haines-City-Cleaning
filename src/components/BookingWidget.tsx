"use client";
import { useEffect, useMemo, useState } from "react";
import { computeQuote, type ServiceType } from "@/lib/pricing";

type SizeOption = { key: string; label: string };

const SIZE_OPTIONS: Record<ServiceType, SizeOption[]> = {
  residential: [
    { key: "studio", label: "Studio" },
    { key: "1bed", label: "1 Bedroom" },
    { key: "2bed", label: "2 Bedroom" },
    { key: "3bed", label: "3 Bedroom" },
    { key: "4plus", label: "4+ Bedroom" },
  ],
  commercial: [
    { key: "small", label: "Small (≤1000 sqft)" },
    { key: "medium", label: "Medium (1000–3000 sqft)" },
    { key: "large", label: "Large (3000+ sqft)" },
  ],
  "post-construction": [
    { key: "under1k", label: "Under 1000 sqft" },
    { key: "1k-2k", label: "1000–2000 sqft" },
    { key: "over2k", label: "2000+ sqft" },
  ],
};

type LevelType = "standard" | "deep" | "move" | "post";

export default function BookingWidget() {
  const [serviceType, setServiceType] = useState<ServiceType>("residential");
  const [sizeKey, setSizeKey] = useState<string>("2bed");
  const [level, setLevel] = useState<LevelType>("standard");
  const [addOns, setAddOns] = useState({ fridge: false, oven: false, windows: false, cabinets: false, baseboards: false });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [step, setStep] = useState(0);

  const quote = useMemo(() => computeQuote({ serviceType, sizeKey, level, addOns }), [serviceType, sizeKey, level, addOns]);

  useEffect(() => {
    if (serviceType === "post-construction") setLevel("post");
    if (serviceType !== "post-construction" && level === "post") setLevel("standard");
  }, [serviceType]);

  const sizeOptions = SIZE_OPTIONS[serviceType];

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Cleaning Request: ${serviceType} • ${sizeKey} • ${date || "TBD"}`);
    const body = encodeURIComponent(
      `Service: ${serviceType}\nSize: ${sizeKey}\nLevel: ${level}\nAdd-ons: ${Object.entries(addOns)
        .filter(([_, v]) => v)
        .map(([k]) => k)
        .join(", ") || "None"}\n\nPreferred Date/Time: ${date || "TBD"} ${time || ""}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\n\nQuoted Price: $${quote.price} (range $${quote.range.low}–$${quote.range.high})\n\nNotes: (add any notes here)`
    );
    return `mailto:hello@hainescitycleaning.com?subject=${subject}&body=${body}`;
  }, [serviceType, sizeKey, level, addOns, date, time, name, email, phone, address, quote]);

  const steps = ["Service", "Options", "Schedule", "Contact", "Review"];

  function next() {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function prev() {
    setStep((s) => Math.max(s - 1, 0));
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Get your instant quote</h2>
      <p className="mt-1 text-xs text-slate-600">A quick, guided booking—finish in under a minute.</p>

      <div className="mt-4 flex items-center gap-2">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`grid h-6 w-6 place-items-center rounded-full text-xs font-semibold ${i <= step ? "bg-[#FF7A00] text-white" : "bg-slate-200 text-slate-600"}`}>{i + 1}</div>
            {i < steps.length - 1 && <div className={`h-px w-8 ${i < step ? "bg-[#FF7A00]" : "bg-slate-200"}`} />}
          </div>
        ))}
      </div>

      <div className="mt-6">
        {step === 0 && (
          <div className="grid gap-3">
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">Service</span>
              <select className="rounded-md border border-slate-300 px-3 py-2 text-sm" value={serviceType} onChange={(e) => setServiceType(e.target.value as ServiceType)}>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="post-construction">Post‑Construction</option>
              </select>
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">Size</span>
              <select className="rounded-md border border-slate-300 px-3 py-2 text-sm" value={sizeKey} onChange={(e) => setSizeKey(e.target.value)}>
                {sizeOptions.map((o) => (
                  <option key={o.key} value={o.key}>{o.label}</option>
                ))}
              </select>
            </label>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-3">
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">Level</span>
              <select className="rounded-md border border-slate-300 px-3 py-2 text-sm" value={level} onChange={(e) => setLevel(e.target.value as LevelType)} disabled={serviceType === "post-construction"}>
                <option value="standard">Standard</option>
                <option value="deep">Deep</option>
                <option value="move">Move‑in/out</option>
              </select>
            </label>
            <fieldset>
              <legend className="text-sm font-medium text-slate-700">Add‑ons</legend>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {Object.entries(addOns).map(([key, val]) => (
                  <label key={key} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={val} onChange={(e) => setAddOns({ ...addOns, [key]: e.target.checked })} />
                    <span className="capitalize">{key}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-3">
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">Preferred Date</span>
              <input type="date" className="rounded-md border border-slate-300 px-3 py-2 text-sm" value={date} onChange={(e) => setDate(e.target.value)} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">Preferred Time</span>
              <input type="time" className="rounded-md border border-slate-300 px-3 py-2 text-sm" value={time} onChange={(e) => setTime(e.target.value)} />
            </label>
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-3">
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">Name</span>
              <input type="text" className="rounded-md border border-slate-300 px-3 py-2 text-sm" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input type="email" className="rounded-md border border-slate-300 px-3 py-2 text-sm" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">Phone</span>
              <input type="tel" className="rounded-md border border-slate-300 px-3 py-2 text-sm" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm font-medium text-slate-700">Address</span>
              <input type="text" className="rounded-md border border-slate-300 px-3 py-2 text-sm" value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-2 text-sm text-slate-700">
            <p><span className="font-semibold">Service:</span> {serviceType}</p>
            <p><span className="font-semibold">Size:</span> {sizeKey}</p>
            <p><span className="font-semibold">Level:</span> {level}</p>
            <p><span className="font-semibold">Add‑ons:</span> {Object.entries(addOns).filter(([_, v]) => v).map(([k]) => k).join(", ") || "None"}</p>
            <p><span className="font-semibold">Preferred:</span> {date || "TBD"} {time || ""}</p>
            <p><span className="font-semibold">Name:</span> {name || "—"}</p>
            <p><span className="font-semibold">Email:</span> {email || "—"}</p>
            <p><span className="font-semibold">Phone:</span> {phone || "—"}</p>
            <p><span className="font-semibold">Address:</span> {address || "—"}</p>
            <div className="mt-4 rounded-lg bg-[#FFB730]/10 p-3">
              <p className="text-slate-800">Estimated total: <span className="font-semibold">${quote.price}</span> <span className="text-xs">(range ${quote.range.low}–${quote.range.high})</span></p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50" onClick={prev} disabled={step === 0}>Back</button>
        {step < steps.length - 1 ? (
          <button className="rounded-full bg-[#FF7A00] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730]" onClick={next}>Next</button>
        ) : (
          <div className="flex gap-2">
            <button className="rounded-full bg-[#FF7A00] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730]" onClick={() => alert(`Estimated total: $${quote.price}`)}>Book Cleaning</button>
            <a href={mailto} className="rounded-full border border-[#FF7A00] px-4 py-2 text-sm font-semibold text-[#FF7A00] hover:bg-[#FFB730]/10">Email me this quote</a>
          </div>
        )}
      </div>
    </div>
  );
}