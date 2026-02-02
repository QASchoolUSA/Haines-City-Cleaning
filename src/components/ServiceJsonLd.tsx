
export default function ServiceJsonLd({
    name,
    description,
    url,
    type = "Service",
}: {
    name: string;
    description: string;
    url: string;
    type?: string;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": type,
        name: name,
        description: description,
        provider: {
            "@type": "LocalBusiness",
            name: "Haines City Cleaning",
            image: "https://hainescitycleaning.com/haines-city-cleaning-logo.svg",
            telephone: "+18633587388",
            address: {
                "@type": "PostalAddress",
                streetAddress: "",
                addressLocality: "Haines City",
                addressRegion: "FL",
                postalCode: "33844",
                addressCountry: "US",
            },
        },
        areaServed: [
            { "@type": "City", name: "Haines City" },
            { "@type": "City", name: "Davenport" },
            { "@type": "City", name: "Lake Hamilton" },
            { "@type": "City", name: "Polk County" }
        ],
        url: url,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
