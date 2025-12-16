export default function JsonLd() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hainescitycleaning.com";
    const jsonLdBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haines City Cleaning",
        "image": `${siteUrl}/haines-city-cleaning-logo.svg`,
        "logo": `${siteUrl}/haines-city-cleaning-logo.svg`,
        "@id": siteUrl,
        "url": siteUrl,
        "telephone": "+18633587388",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Haines City",
            "addressRegion": "FL",
            "postalCode": "33844",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.1142,
            "longitude": -81.6179
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Haines City"
            },
            {
                "@type": "City",
                "name": "Davenport"
            },
            {
                "@type": "City",
                "name": "Lake Hamilton"
            }
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        },
        "priceRange": "$$"
    };
    const jsonLdWebsite = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Haines City Cleaning",
        "alternateName": "hainescitycleaning.com",
        "url": siteUrl
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
