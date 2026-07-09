import { absoluteUrl, businessPhone, siteName } from "@/lib/site";

export default function ServiceJsonLd({
  name,
  description,
  path,
  type = "Service",
}: {
  name: string;
  description: string;
  path: string;
  type?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: siteName,
      image: absoluteUrl("/haines-city-cleaning-logo.svg"),
      telephone: businessPhone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Haines City",
        addressRegion: "FL",
        postalCode: "33844",
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "City", name: "Haines City" },
      { "@type": "City", name: "Davenport" },
      { "@type": "City", name: "Winter Haven" },
      { "@type": "City", name: "Lakeland" },
      { "@type": "City", name: "Lake Hamilton" },
      { "@type": "AdministrativeArea", name: "Polk County" },
    ],
    url: absoluteUrl(path),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
