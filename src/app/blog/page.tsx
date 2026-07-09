import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata = createPageMetadata({
  title: "Cleaning Tips & Guides",
  description:
    "Expert cleaning advice for Haines City homeowners and businesses. Pricing guides, checklists, and local cleaning tips from Haines City Cleaning.",
  path: "/blog",
  ogImage: "/og/blog.jpg",
  keywords: ["cleaning tips haines city", "house cleaning guide", "haines city cleaning blog"],
});

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="section-eyebrow">Resources</p>
        <h1 className="section-title mt-2">Cleaning Tips &amp; Guides</h1>
        <p className="section-subtitle">
          Practical advice for homeowners and businesses in Haines City and Polk County.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="card card-hover p-6">
            <p className="text-xs font-medium text-slate-500">{post.readTime}</p>
            <h2 className="mt-2 text-xl font-bold text-slate-900">
              <Link href={`/blog/${post.slug}`} className="hover:text-[#FF7A00]">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-semibold text-[#FF7A00] hover:underline">
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
