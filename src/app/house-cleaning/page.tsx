import ResidentialCleaningContent from "@/components/ResidentialCleaningContent";
import HouseCleaningContent from "@/components/HouseCleaningContent";
import Icon, { type IconName } from "@/components/Icon";

export const metadata = {
    title: "House Cleaning Services Haines City, FL | Best Maid Service",
    description:
        "Trusted house cleaning in Haines City, FL. Professional maid service for recurring maintenance, deep cleaning, and housekeeping. Vetted local cleaners.",
    alternates: {
        canonical: "/house-cleaning",
    },
    keywords: [
        "house cleaning haines city",
        "maid service haines city",
        "home cleaning services",
        "housekeeping haines city",
        "cleaning lady haines city",
        "residential cleaning",
        "weekly house cleaning"
    ],
};

const whatsIncluded: { icon: IconName; text: string }[] = [
    { icon: "sparkles", text: "Thorough dusting & surface polishing" },
    { icon: "check", text: "Vacuuming & mopping all floors" },
    { icon: "check", text: "Kitchen deep clean: counters, appliance exteriors" },
    { icon: "check", text: "Bathroom sanitization: toilets, showers, tubs" },
    { icon: "trash", text: "Trash removal & linen changing (on request)" },
    { icon: "star", text: "Pet-friendly cleaning methods" },
];

const whyChoose: { icon: IconName; text: string }[] = [
    { icon: "star", text: "Consistent, 5-star rated local cleaners" },
    { icon: "clock", text: "Punctual weekly, bi-weekly, or monthly visits" },
    { icon: "shield", text: "Fully insured and background-checked staff" },
    { icon: "check", text: "100% Satisfaction Guarantee" },
];

export default function HouseCleaning() {
    return (
        <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 sm:px-6 lg:px-8">
            <section>
                <article className="rounded-2xl bg-white p-8">
                    <div className="space-y-12 divide-y divide-slate-100">
                        <header className="space-y-3">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900">House Cleaning Services in Haines City</h1>
                            <p className="text-slate-700">Experience a spotless home without lifting a finger. Our <strong>Haines City house cleaning</strong> team delivers reliable, top-quality maid services tailored to your lifestyle.</p>
                            <div className="pt-4">
                                <a href="/#booking" className="inline-flex rounded-full bg-[#FF7A00] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#FFB730]">Get your free quote</a>
                            </div>
                        </header>

                        <div className="pt-8 bg-[#FFB730]/10 rounded-2xl p-8">
                            <h2 className="text-xl font-semibold text-slate-900">Comprehensive House Cleaning Checklist</h2>
                            <p className="mt-2 max-w-2xl text-slate-700">We don't just clear the clutter; we scrub, sanitize, and shine. From ceiling fans to baseboards, our <strong>maid service</strong> covers it all.</p>
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
                            <h2 className="text-xl font-semibold text-slate-900">Your Local Cleaning Partners</h2>
                            <p className="mt-3 text-slate-700">Finding reliable <strong>house cleaning in Haines City, FL</strong> shouldn't be a hassle. We are a locally owned business dedicated to serving our neighbors in Haines City, Davenport, and surrounding Polk County areas. whether you need a one-time <strong>deep house cleaning</strong> or regular maintenance, we are here to help.</p>

                            <h3 className="mt-6 text-lg font-semibold text-slate-900">Flexible Scheduling</h3>
                            <p className="mt-2 text-slate-700">Life gets busy. That's why we offer weekly, bi-weekly, and monthly <strong>residential cleaning</strong> schedules. No contracts—just great service when you need it.</p>
                        </div>

                        <div className="pt-8 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <h2 className="text-xl font-semibold text-slate-900">Why Neighbors Trust Us</h2>
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
                            <h2 className="text-xl font-semibold text-slate-900">Detailed Maid Service</h2>
                            <p className="mt-3 text-slate-700">Our <strong>maid service in Haines City</strong> is designed for discerning homeowners. We use high-quality products and proven techniques to ensure your kitchen sparkles and your bathrooms are hygienic. We pay special attention to high-touch areas, ensuring a healthy environment for your family.</p>
                            <p className="mt-3 text-slate-700">Ready to come home to a clean house? Book your <strong>house cleaning</strong> today and see the difference professional care makes.</p>
                        </div>
                        <div className="pt-8">
                            <HouseCleaningContent />
                        </div>
                    </div>
                </article>
            </section>

            {/* CTA band */}
            <section className="mt-16 bg-[#FF7A00]">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-semibold text-white">Reclaim your weekends</h3>
                            <p className="text-white/90 mt-1">Let us handle the chores. Book your house cleaning now.</p>
                        </div>
                        <a href="/#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#FF7A00] shadow-sm hover:bg-[#FFB730]/10">Get started</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
