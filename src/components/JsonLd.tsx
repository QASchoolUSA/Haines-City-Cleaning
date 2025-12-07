export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Haines City Cleaning",
        "image": "https://hainescitycleaning.com/haines-city-cleaning-logo.png", // Assuming a logo location or placeholder. We might need to check if one exists or use a default.
        "@id": "https://hainescitycleaning.com",
        "url": "https://hainescitycleaning.com",
        "telephone": "+18635550123", // Needs a real number if available, using placeholder or generic
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

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
