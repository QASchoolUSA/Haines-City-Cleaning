import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAreaBySlug, serviceAreas } from "@/lib/areas";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import { siteImages } from "@/lib/images";

const SERVICE_LINKS = [
  { href: "/house-cleaning", label: "House Cleaning" },
  { href: "/residential-cleaning", label: "Residential Cleaning" },
  { href: "/commercial-cleaning", label: "Commercial Cleaning" },
  { href: "/move-out-cleaning", label: "Move-Out Cleaning" },
  { href: "/move-in-cleaning", label: "Move-In Cleaning" },
  { href: "/airbnb-cleaning", label: "Airbnb Cleaning" },
  { href: "/post-construction-cleaning", label: "Post-Construction Cleaning" },
];

const areaExtras: Record<
  string,
  {
    county: string;
    neighborhoods: string[];
    intro: string;
    context: string;
    priorities: string[];
    faqs: { q: string; a: string }[];
  }
> = {
  davenport: {
    county: "Polk County",
    neighborhoods: ["Downtown Davenport", "Loughman", "Ridgewood Lakes", "communities along US-27"],
    intro:
      "Davenport combines established streets near its historic center with rapidly growing subdivisions, townhomes, and vacation-oriented communities along the US-27 corridor. Cleaning needs vary sharply between full-time family homes and properties that host frequent Central Florida visitors.",
    context:
      "Newer homes may have large open kitchens, multiple bathrooms, tile-heavy living areas, and construction dust that continues settling after move-in. Established homes often benefit from detail work around baseboards, fans, window sills, and older cabinetry. Vacation and second homes need access instructions, linen plans, and an honest checkout-to-check-in window.",
    priorities: [
      "Tile and entry floors after rain or pool traffic",
      "Guest bathrooms and high-use kitchens",
      "Ceiling fans, vents, and construction dust in newer homes",
      "Gate codes and parking instructions for planned communities",
    ],
    faqs: [
      {
        q: "Do you clean homes near ChampionsGate and the US-27 corridor?",
        a: "We serve Davenport-area addresses subject to route availability. Include the full address, community name, gate procedure, and preferred date when requesting a quote.",
      },
      {
        q: "Can I arrange recurring cleaning for a Davenport family home?",
        a: "Yes. Weekly service suits active homes with children, pets, or frequent guests, while biweekly service is a practical maintenance rhythm for many smaller households.",
      },
      {
        q: "Do you provide vacation-rental turnover cleaning?",
        a: "Turnover work may be available when the host provides checkout and check-in times, access, linen responsibilities, restocking instructions, and a property-specific checklist.",
      },
    ],
  },
  "winter-haven": {
    county: "Polk County",
    neighborhoods: ["Downtown Winter Haven", "Cypress Gardens", "Florence Villa", "Chain of Lakes communities"],
    intro:
      "Winter Haven's homes range from downtown apartments and established neighborhoods to newer subdivisions and lake-adjacent properties. A useful local checklist accounts for humid bathrooms, sliding-door traffic, shaded entries, and the mix of everyday living with seasonal guests.",
    context:
      "Lakefront and pool homes often collect fine grit near patios, tracks, and hard-floor living spaces. Family neighborhoods near Cypress Gardens may prioritize kitchens, bathrooms, floors, and guest rooms, while lightly occupied seasonal homes need arrival or departure resets. Rotating fans, vents, baseboards, and window tracks keeps detail work manageable.",
    priorities: [
      "Sliding-door tracks and outdoor-adjacent floors",
      "Bathroom moisture and soap-film control",
      "Guest-room preparation before seasonal visits",
      "Recurring kitchen and high-traffic floor care",
    ],
    faqs: [
      {
        q: "Which Winter Haven neighborhoods can request cleaning?",
        a: "We serve Winter Haven and nearby Polk County communities based on the exact address and crew route. Downtown, Cypress Gardens, Florence Villa, and Chain of Lakes area requests are welcome.",
      },
      {
        q: "Can you clean a lakefront home or condo?",
        a: "Yes. Share parking, stairs or elevator access, specialty floor materials, and whether lanais or outdoor areas are part of the requested scope.",
      },
      {
        q: "Is deep cleaning necessary before recurring service?",
        a: "It is useful when there is visible buildup on baseboards, fixtures, fans, kitchen surfaces, or bathrooms. A deep reset lets later weekly or biweekly visits focus on maintenance.",
      },
    ],
  },
  lakeland: {
    county: "Polk County",
    neighborhoods: ["Downtown Lakeland", "Lake Hollingsworth", "Dixieland", "South Lakeland"],
    intro:
      "Lakeland includes downtown apartments, historic bungalows, lake-area homes, and newer neighborhoods across South Lakeland. Cleaning plans should reflect the property's age and finishes as well as the number of rooms and people using them.",
    context:
      "Historic homes around Dixieland and central Lakeland may have original wood, older tile, detailed trim, and windows that need careful product choices. Larger suburban homes can be organized by zones so kitchens, occupied bedrooms, bathrooms, and living areas stay consistent while guest rooms and detail work rotate.",
    priorities: [
      "Careful handling of older wood and tile",
      "Pollen and entry-floor cleanup",
      "Zone-based plans for larger homes",
      "Kitchen, bathroom, and pet-hair maintenance",
    ],
    faqs: [
      {
        q: "Can you clean historic Lakeland homes?",
        a: "Yes. Tell us about original wood, stone, tile, or other specialty finishes before the visit so appropriate products and methods can be used.",
      },
      {
        q: "Do you serve South Lakeland?",
        a: "South Lakeland requests are scheduled based on the exact address and route availability. Submit the address with access and parking details for confirmation.",
      },
      {
        q: "What schedule works best for a busy Lakeland household?",
        a: "Weekly visits are helpful for pets, children, frequent cooking, or regular guests. Biweekly cleaning often maintains smaller or lower-traffic homes effectively.",
      },
    ],
  },
};

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  const area = getAreaBySlug(city);
  if (!area) return {};

  return createPageMetadata({
    title: `House Cleaning ${area.name}, FL`,
    description: `Professional cleaning services in ${area.name}, FL. Residential, commercial, move-in/out, and post-construction cleaning by Haines City Cleaning.`,
    path: `/areas/${area.slug}`,
    ogImage: "/og/areas.jpg",
    keywords: [
      `house cleaning ${area.name.toLowerCase()} fl`,
      `cleaning services ${area.name.toLowerCase()}`,
      `maid service ${area.name.toLowerCase()}`,
    ],
  });
}

export default async function AreaPage({ params }: Props) {
  const { city } = await params;
  const area = getAreaBySlug(city);
  if (!area) notFound();

  const extras = areaExtras[area.slug];
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: `${area.name}, FL`, path: `/areas/${area.slug}` },
  ]);
  const faqJsonLd = extras
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: extras.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">{extras?.county ?? "Service area"}</p>
            <h1 className="section-title mt-2">Cleaning Services in {area.name}, FL</h1>
            <p className="section-subtitle max-w-3xl">{extras?.intro ?? area.description}</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/80">
            <Image
              src={siteImages.localHome.src}
              alt={`Professional cleaning services available in ${area.name}, FL`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        {extras && (
          <section className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">How local housing shapes the checklist</h2>
              <p className="mt-4 leading-relaxed text-slate-700">{extras.context}</p>
              <p className="mt-4 leading-relaxed text-slate-700">
                Haines City Cleaning serves homes in and around {extras.neighborhoods.join(", ")}. Exact coverage
                depends on the address and schedule. Quotes reflect home size, bathrooms, condition, service type,
                frequency, and agreed add-ons—not a one-size-fits-all city price.
              </p>
            </div>
            <aside className="rounded-2xl bg-[#FFB730]/10 p-6">
              <h2 className="text-xl font-bold text-slate-900">Common local priorities</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
                {extras.priorities.map((priority) => (
                  <li key={priority}>{priority}</li>
                ))}
              </ul>
            </aside>
          </section>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card card-hover p-5 text-sm font-semibold text-slate-800 hover:text-[#FF7A00]">
              {link.label} in {area.name} →
            </Link>
          ))}
        </div>

        {extras && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
            <div className="mt-6 space-y-4">
              {extras.faqs.map((faq) => (
                <article key={faq.q} className="rounded-xl border border-slate-200 p-6">
                  <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                  <p className="mt-2 leading-relaxed text-slate-700">{faq.a}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 p-8">
          <h2 className="text-xl font-semibold text-slate-900">Nearby communities we serve</h2>
          <p className="mt-3 text-slate-600">
            {area.nearby.join(", ")}, and surrounding Polk County areas.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Also serving:{" "}
            {serviceAreas
              .filter((a) => a.slug !== area.slug)
              .map((a, i, arr) => (
                <span key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="font-medium text-[#FF7A00] hover:underline">
                    {a.name}
                  </Link>
                  {i < arr.length - 1 ? ", " : ""}
                </span>
              ))}
          </p>
        </div>
      </div>

      <ServiceBookingSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
    </main>
  );
}
