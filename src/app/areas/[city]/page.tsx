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

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: `${area.name}, FL`, path: `/areas/${area.slug}` },
  ]);

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Service area</p>
            <h1 className="section-title mt-2">Cleaning Services in {area.name}, FL</h1>
            <p className="section-subtitle max-w-3xl">{area.description}</p>
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card card-hover p-5 text-sm font-semibold text-slate-800 hover:text-[#FF7A00]">
              {link.label} in {area.name} →
            </Link>
          ))}
        </div>

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
    </main>
  );
}
