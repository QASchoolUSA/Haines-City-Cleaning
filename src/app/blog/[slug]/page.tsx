import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost } from "@/lib/blog";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { blogPosts } = await import("@/lib/blog");
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogImage: "/og/blog.jpg",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <article>
        <p className="section-eyebrow">Blog</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-sm text-slate-500">{post.readTime} · Updated {post.updatedAt}</p>

        <div className="prose prose-slate mt-10 max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:leading-relaxed prose-p:text-slate-600 prose-a:text-[#FF7A00]">
          {slug === "cost-of-house-cleaning-haines-city" ? (
            <>
              <p>
                If you&apos;re searching for <strong>house cleaning prices in Haines City</strong>, you&apos;re not alone.
                Most homeowners want a clear answer before booking — without hidden fees or surprise add-ons.
              </p>

              <h2>Typical House Cleaning Prices in Haines City</h2>
              <p>Based on our local pricing, here&apos;s what most Haines City homeowners pay:</p>
              <ul>
                <li><strong>Studio / 1-bedroom standard clean:</strong> $99–$119</li>
                <li><strong>2-bedroom standard clean:</strong> $139</li>
                <li><strong>3-bedroom standard clean:</strong> $169</li>
                <li><strong>4+ bedroom standard clean:</strong> $199+</li>
                <li><strong>Deep clean premium:</strong> ~40% above standard</li>
                <li><strong>Move-in / move-out:</strong> ~20% above standard</li>
              </ul>

              <h2>What Affects Your Quote?</h2>
              <p>Several factors influence your final price:</p>
              <ul>
                <li><strong>Home size</strong> — bedrooms and square footage</li>
                <li><strong>Cleaning level</strong> — standard, deep, or move-in/out</li>
                <li><strong>Add-ons</strong> — inside fridge, oven, windows, cabinets, baseboards</li>
                <li><strong>Frequency</strong> — recurring clients often get better per-visit value</li>
              </ul>

              <h2>Get an Instant Quote</h2>
              <p>
                Use our <Link href="/#booking">online booking widget</Link> for a real-time estimate, or see our full{" "}
                <Link href="/pricing">pricing page</Link> for residential, commercial, and post-construction rates.
              </p>
              <p>
                Ready to book? Explore our{" "}
                <Link href="/house-cleaning">house cleaning services in Haines City</Link> or call us for a custom quote.
              </p>
            </>
          ) : null}
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </main>
  );
}
