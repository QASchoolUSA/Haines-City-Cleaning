import {
  absoluteUrl,
  businessPhone,
  facebookUrl,
  googleBusinessUrl,
  siteName,
  siteUrl,
} from "@/lib/site";
import { aggregateRating } from "@/lib/reviews";

export default function JsonLd() {
  const sameAs = [googleBusinessUrl, facebookUrl].filter(Boolean);

  const jsonLdBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: siteName,
    image: absoluteUrl("/haines-city-cleaning-logo.svg"),
    logo: absoluteUrl("/haines-city-cleaning-logo.svg"),
    url: siteUrl,
    telephone: businessPhone,
    email: "hello@hainescitycleaning.com",
    description:
      "Professional residential, commercial, and post-construction cleaning services in Haines City, FL and Polk County.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Haines City",
      addressRegion: "FL",
      postalCode: "33844",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.1142,
      longitude: -81.6179,
    },
    areaServed: [
      { "@type": "City", name: "Haines City" },
      { "@type": "City", name: "Davenport" },
      { "@type": "City", name: "Winter Haven" },
      { "@type": "City", name: "Lakeland" },
      { "@type": "City", name: "Lake Hamilton" },
      { "@type": "AdministrativeArea", name: "Polk County" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessPhone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    alternateName: "hainescitycleaning.com",
    url: siteUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
    </>
  );
}
