export type ServiceArea = {
  slug: string;
  name: string;
  description: string;
  nearby: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "davenport",
    name: "Davenport",
    description:
      "Professional house and commercial cleaning for Davenport homes, vacation rentals, and businesses near Posner Park and US-27.",
    nearby: ["Haines City", "Champions Gate", "Four Corners"],
  },
  {
    slug: "winter-haven",
    name: "Winter Haven",
    description:
      "Reliable residential and office cleaning throughout Winter Haven, including Chain of Lakes neighborhoods and downtown businesses.",
    nearby: ["Haines City", "Lake Wales", "Auburndale"],
  },
  {
    slug: "lakeland",
    name: "Lakeland",
    description:
      "Trusted cleaning services for Lakeland homes and workplaces—from South Lakeland to North Lakeland and surrounding Polk County.",
    nearby: ["Haines City", "Mulberry", "Plant City"],
  },
];

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}
