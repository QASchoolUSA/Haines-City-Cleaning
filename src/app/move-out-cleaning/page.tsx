import Icon, { type IconName } from "@/components/Icon";
import MoveOutCleaningContent from "@/components/MoveOutCleaningContent";

export const metadata = {
    title: "Move Out Cleaning Haines City, FL | Move In & Vacancy Cleaning",
    description:
        "Professional move-out and move-in cleaning in Haines City. Ensure you get your deposit back with our deep cleaning checklist. Ideal for tenants, landlords, and realtors.",
    alternates: {
        canonical: "/move-out-cleaning",
    },
    keywords: [
        "move out cleaning haines city",
        "move in cleaning haines city",
        "vacancy cleaning",
        "end of tenancy cleaning",
        "apartment move out cleaning",
        "rental cleaning haines city"
    ],
};

const checklist: { icon: IconName; title: string; desc: string }[] = [
    { icon: "sparkles", title: "Inside Cabinets & Drawers", desc: "We wipe out all cupboards, drawers, and shelves." },
    { icon: "check", title: "Appliances Inside & Out", desc: "Fridge, oven, and microwave deep cleaned." },
    { icon: "check", title: "Baseboards & Door Frames", desc: "Dusting and scrubbing scuff marks." },
    { icon: "check", title: "Bathrooms Top to Bottom", desc: "Descaling faucets, sanitizing toilets and tubs." },
    { icon: "check", title: "Window Sills & Blinds", desc: "Removing built-up dust and grime." },
    { icon: "home", title: "Floors Deep Cleaned", desc: "Vacuuming and mopping to leave a streak-free shine." },
];

export default function MoveOutCleaning() {
    return (
        <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
            <section>
                <article className="rounded-2xl bg-white p-8">
                    <div className="space-y-12 divide-y divide-slate-100">
                        <header className="space-y-3">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Move-Out & Move-In Cleaning in Haines City</h1>
                            <p className="text-slate-700">Moving is stressful enough. Let our professionals handle the <strong>move-out cleaning</strong> so you can focus on your new home. Perfect for tenants, landlords, and property managers.</p>
                            <div className="pt-4">
                                <a href="/#booking" className="inline-flex rounded-full bg-[#FF7A00] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730]">Book move-out clean</a>
                            </div>
                        </header>

                        <div className="pt-8">
                            <h2 className="text-xl font-semibold text-slate-900">Get Your Security Deposit Back</h2>
                            <p className="mt-3 text-slate-700">Our <strong>move-out cleaning service</strong> is designed to meet strict landlord and property management standards. We know exactly what inspectors look for. Don't risk your deposit; hire the <strong>Haines City cleaning</strong> experts.</p>
                        </div>

                        <div className="pt-8 bg-[#FFB730]/10 rounded-2xl p-8">
                            <h2 className="text-xl font-semibold text-slate-900">Our Move-In/Move-Out Checklist</h2>
                            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {checklist.map((item) => (
                                    <div key={item.title} className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 font-semibold text-slate-900">
                                            <Icon name={item.icon} className="h-5 w-5 text-[#FF7A00]" />
                                            {item.title}
                                        </div>
                                        <p className="text-sm text-slate-700 pl-7">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8">
                            <h2 className="text-xl font-semibold text-slate-900">For Landlords & Realtors</h2>
                            <p className="mt-3 text-slate-700">Need to get a property ready for the market? Our <strong>vacancy cleaning</strong> services ensure your rental or listing looks its absolute best for potential tenants or buyers. A sparkling clean home sells faster and rents for more.</p>
                            <p className="mt-3 text-slate-700">We proudly serve Haines City, Davenport, Lake Hamilton, and surrounding areas with reliable <strong>turnover cleaning</strong>.</p>
                        </div>

                        <div className="pt-8">
                            <h2 className="text-xl font-semibold text-slate-900">Ready for a Fresh Start?</h2>
                            <p className="mt-3 text-slate-700">Whether you are moving in or moving out, start fresh with a professionally cleaned home. Contact <strong>Haines City Cleaning</strong> for a free estimate on your <strong>move cleaning</strong> needs.</p>
                        </div>
                        <div className="pt-8">
                            <MoveOutCleaningContent />
                        </div>
                    </div>
                </article>
            </section>

            {/* CTA band */}
            <section className="mt-16 bg-[#FF7A00]">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white">Moving soon?</h3>
                            <p className="text-white/90 mt-1">Check cleaning off your to-do list today.</p>
                        </div>
                        <a href="/#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#FF7A00] shadow-sm hover:bg-[#FFB730]/10">Schedule now</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
