export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
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
