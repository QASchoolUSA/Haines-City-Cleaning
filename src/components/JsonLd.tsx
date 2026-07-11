import {
  absoluteUrl,
  businessEmail,
  businessPhone,
  facebookUrl,
  googleBusinessUrl,
  siteName,
  siteUrl,
} from "@/lib/site";
import { aggregateRating } from "@/lib/reviews";

/**
 * Phase 4 technical entity schema — Organization + WebSite + ProfessionalService
 * graph optimized for entity discovery, AEO extraction, and local SEO.
 * `sameAs` entries are placeholders until verified profile URLs are configured.
 */
export default function JsonLd() {
  const sameAs = [
    googleBusinessUrl || "https://www.google.com/maps?cid=PLACEHOLDER_GOOGLE_BUSINESS_PROFILE",
    facebookUrl || "https://www.facebook.com/PLACEHOLDER_HAINES_CITY_CLEANING",
    "https://www.instagram.com/PLACEHOLDER_HAINES_CITY_CLEANING",
    "https://www.yelp.com/biz/PLACEHOLDER_HAINES_CITY_CLEANING",
    "https://www.bbb.org/us/fl/haines-city/PLACEHOLDER_BBB_PROFILE",
  ].filter(Boolean);

  const aboutEntities = [
    {
      "@type": "Thing",
      name: "Cleaning services in Haines City, FL",
      description:
        "Professional residential, commercial, vacancy, and specialty cleaning serving Haines City and Polk County.",
    },
    {
      "@type": "City",
      name: "Haines City",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Polk County",
        containedInPlace: { "@type": "State", name: "Florida" },
      },
    },
    { "@type": "Service", name: "House Cleaning" },
    { "@type": "Service", name: "Apartment Cleaning" },
    { "@type": "Service", name: "Move Out Cleaning" },
    { "@type": "Service", name: "Airbnb Cleaning" },
    { "@type": "Service", name: "Commercial Cleaning" },
    { "@type": "Service", name: "Post Construction Cleaning" },
  ];

  const mentionEntities = [
    { "@type": "Service", name: "Turnover Cleaning" },
    { "@type": "Service", name: "Move In Cleaning" },
    { "@type": "Service", name: "Office Cleaning" },
    { "@type": "Service", name: "Restaurant Cleaning" },
    { "@type": "Service", name: "Cafe Cleaning" },
    { "@type": "City", name: "Davenport" },
    { "@type": "City", name: "Winter Haven" },
    { "@type": "City", name: "Lakeland" },
    { "@type": "City", name: "Lake Hamilton" },
    { "@type": "AdministrativeArea", name: "Polk County" },
    { "@type": "Audience", name: "Homeowners" },
    { "@type": "Audience", name: "Apartment Owners" },
    { "@type": "Audience", name: "Property Managers" },
    { "@type": "Audience", name: "Business Owners" },
  ];

  const areaServed = [
    { "@type": "City", name: "Haines City" },
    { "@type": "City", name: "Davenport" },
    { "@type": "City", name: "Winter Haven" },
    { "@type": "City", name: "Lakeland" },
    { "@type": "City", name: "Lake Hamilton" },
    { "@type": "AdministrativeArea", name: "Polk County" },
  ];

  const postalAddress = {
    "@type": "PostalAddress",
    addressLocality: "Haines City",
    addressRegion: "FL",
    postalCode: "33844",
    addressCountry: "US",
  };

  const organizationId = `${siteUrl}/#organization`;
  const businessId = `${siteUrl}/#business`;
  const websiteId = `${siteUrl}/#website`;

  const organization = {
    "@type": ["Organization", "LocalBusiness", "HouseCleaner"],
    "@id": organizationId,
    name: siteName,
    legalName: siteName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/haines-city-cleaning-logo.svg"),
    },
    image: absoluteUrl("/haines-city-cleaning-logo.svg"),
    telephone: businessPhone,
    email: businessEmail,
    description:
      "Professional residential, commercial, Airbnb turnover, move-out, and post-construction cleaning services in Haines City, FL and Polk County.",
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.1142,
      longitude: -81.6179,
    },
    areaServed,
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
      bestRating: aggregateRating.bestRating,
      worstRating: aggregateRating.worstRating,
    },
    sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessPhone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
    about: aboutEntities,
    mentions: mentionEntities,
    knowsAbout: [
      "House cleaning in Haines City FL",
      "Move-out cleaning checklists for security deposits",
      "Airbnb turnover cleaning SLAs",
      "Commercial office and restaurant cleaning",
      "Post-construction dust removal protocols",
      "Florida humidity and hard-water cleaning",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Haines City Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-residential` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-move-out` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-airbnb` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-commercial` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-post-construction` },
        },
      ],
    },
  };

  // Alias node so existing ReviewJsonLd `@id` references remain valid.
  // Include aggregateRating here too so merged #business entities stay valid
  // if a crawler sees this graph node without the separate ReviewJsonLd script.
  const businessAlias = {
    "@type": ["LocalBusiness", "HouseCleaner"],
    "@id": businessId,
    name: siteName,
    url: siteUrl,
    parentOrganization: { "@id": organizationId },
    telephone: businessPhone,
    address: postalAddress,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating,
      worstRating: aggregateRating.worstRating,
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteName,
    alternateName: ["hainescitycleaning.com", "Haines City Cleaning Services"],
    url: siteUrl,
    publisher: { "@id": organizationId },
    inLanguage: "en-US",
    about: aboutEntities,
    mentions: mentionEntities,
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: absoluteUrl("/#booking"),
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Cleaning service booking",
      },
    },
  };

  const professionalServices = [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service-residential`,
      name: "Residential & House Cleaning in Haines City, FL",
      serviceType: "House Cleaning",
      description:
        "Standard, deep, and recurring house and apartment cleaning for homeowners and apartment owners in Haines City and Polk County.",
      provider: { "@id": organizationId },
      areaServed,
      url: absoluteUrl("/house-cleaning"),
      about: [
        { "@type": "Service", name: "House Cleaning" },
        { "@type": "Service", name: "Apartment Cleaning" },
        { "@type": "City", name: "Haines City" },
      ],
      mentions: [
        { "@type": "Service", name: "Maid Service" },
        { "@type": "Service", name: "Deep Cleaning" },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service-move-out`,
      name: "Move-Out & Move-In Cleaning in Haines City, FL",
      serviceType: "Move Out Cleaning",
      description:
        "Deposit-focused vacancy cleans and move-in resets for tenants, landlords, and property managers in Haines City, FL.",
      provider: { "@id": organizationId },
      areaServed,
      url: absoluteUrl("/move-out-cleaning"),
      about: [
        { "@type": "Service", name: "Move Out Cleaning" },
        { "@type": "Service", name: "Move In Cleaning" },
      ],
      mentions: [
        { "@type": "Audience", name: "Property Managers" },
        { "@type": "Audience", name: "Tenants" },
        { "@type": "Thing", name: "Security Deposit" },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service-airbnb`,
      name: "Airbnb & Vacation Rental Turnover Cleaning",
      serviceType: "Airbnb Cleaning",
      description:
        "Same-day Airbnb and short-term rental turnover cleaning with linen reset, staging, and host QA for Haines City, Davenport, and Polk County.",
      provider: { "@id": organizationId },
      areaServed,
      url: absoluteUrl("/airbnb-cleaning"),
      about: [
        { "@type": "Service", name: "Airbnb Cleaning" },
        { "@type": "Service", name: "Turnover Cleaning" },
        { "@type": "City", name: "Haines City" },
        { "@type": "City", name: "Davenport" },
      ],
      mentions: [
        { "@type": "Audience", name: "Airbnb Hosts" },
        { "@type": "Audience", name: "Property Managers" },
        { "@type": "Thing", name: "Same-Day Turnover SLA" },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service-commercial`,
      name: "Commercial, Office & Restaurant Cleaning",
      serviceType: "Commercial Cleaning",
      description:
        "Scheduled office, retail, café, and restaurant cleaning for business owners in Haines City and surrounding Polk County.",
      provider: { "@id": organizationId },
      areaServed,
      url: absoluteUrl("/commercial-cleaning"),
      about: [
        { "@type": "Service", name: "Commercial Cleaning" },
        { "@type": "Service", name: "Office Cleaning" },
        { "@type": "Service", name: "Restaurant Cleaning" },
      ],
      mentions: [
        { "@type": "Audience", name: "Business Owners" },
        { "@type": "Service", name: "Cafe Cleaning" },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service-post-construction`,
      name: "Post-Construction Cleaning in Haines City, FL",
      serviceType: "Post Construction Cleaning",
      description:
        "Rough, final, and touch-up post-construction cleaning for renovations and new builds across Haines City and Polk County.",
      provider: { "@id": organizationId },
      areaServed,
      url: absoluteUrl("/post-construction-cleaning"),
      about: [
        { "@type": "Service", name: "Post Construction Cleaning" },
        { "@type": "City", name: "Haines City" },
      ],
      mentions: [
        { "@type": "Thing", name: "Drywall Dust Removal" },
        { "@type": "Thing", name: "Final Clean" },
      ],
    },
  ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, businessAlias, website, ...professionalServices],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
