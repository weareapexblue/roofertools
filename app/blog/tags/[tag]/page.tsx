import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getAllBlogTags,
  getBlogPostsByTagSlug,
  getDisplayTagBySlug,
  slugifyTag,
} from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllBlogTags().map((tag) => ({ tag: slugifyTag(tag) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const label = getDisplayTagBySlug(tag);

  return buildMetadata({
    title: label ? `Blog Tag: ${label}` : "Blog Tag",
    description: label
      ? `Articles tagged ${label} for roofing marketing strategy.`
      : "Tagged blog content.",
    path: `/blog/tags/${tag}`,
  });
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const label = getDisplayTagBySlug(tag);
  const posts = getBlogPostsByTagSlug(tag);

  if (!label || posts.length === 0) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 px-6 py-16 sm:py-20">
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
          Blog Tag
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
          {label}
        </h1>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <h2 className="text-xl font-semibold tracking-tight text-[var(--text)]">{post.title}</h2>
            <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]"
            >
              Read Article
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
