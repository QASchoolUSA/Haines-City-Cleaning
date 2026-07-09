export type Review = {
  author: string;
  rating: number;
  body: string;
};

export const reviews: Review[] = [
  {
    author: "Maria G.",
    rating: 5,
    body: "They did an incredible deep clean before our move‑in. Floors and windows looked brand new!",
  },
  {
    author: "Trent P.",
    rating: 5,
    body: "Reliable weekly office cleaning—our team notices the difference. Highly recommend.",
  },
  {
    author: "Sofia R.",
    rating: 5,
    body: "Post‑construction dust everywhere—gone in a day. Fast and thorough service.",
  },
];

export const aggregateRating = {
  ratingValue: "5",
  reviewCount: String(reviews.length),
};
