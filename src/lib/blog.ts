export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "airbnb-turnover-time-haines-city",
    title:
      "How Long Does Airbnb Turnover Cleaning Take Near Haines City & Davenport?",
    description:
      "Same-day Airbnb turnover timing for 2–3 bedroom rentals near Haines City and Davenport — minute-by-minute SLA, booking-gap math, and what extends the clock.",
    updatedAt: "2026-07-10",
    readTime: "7 min read",
  },
  {
    slug: "move-out-cleaning-checklist-haines-city",
    title:
      "Move-Out Cleaning Checklist for Haines City, FL: Protect Your Security Deposit",
    description:
      "Deposit-safe move-out cleaning checklist for Haines City and Polk County — the five failure zones landlords flag most, Florida-specific add-ons, and photo documentation tips.",
    updatedAt: "2026-07-10",
    readTime: "8 min read",
  },
  {
    slug: "cost-of-house-cleaning-haines-city",
    title: "How Much Does House Cleaning Cost in Haines City, FL?",
    description:
      "A transparent breakdown of house cleaning prices in Haines City — standard cleans, deep cleans, move-in/out, and what affects your quote.",
    updatedAt: "2026-07-01",
    readTime: "5 min read",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
