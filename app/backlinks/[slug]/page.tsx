import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { ProductDetailPage } from "@/components/product-detail-page";
import { getProductBySiloAndSlug, products, getProductsBySilo } from "@/lib/products";
import { buildFaqSchema, buildMetadata, buildProductSchema } from "@/lib/seo";

export function generateStaticParams() {
  return getProductsBySilo("backlinks").map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySiloAndSlug("backlinks", slug);

  if (!product) {
    return buildMetadata({
      title: "Backlink Product Not Found",
      description: "Requested backlink product does not exist.",
      path: `/backlinks/${slug}`,
    });
  }

  return buildMetadata({
    title: product.name,
    description: product.summary,
    path: `/backlinks/${product.slug}`,
    keywords: ["roofing backlinks", "roofer marketing", product.name],
  });
}

export default async function BacklinkProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySiloAndSlug("backlinks", slug);

  if (!product) {
    notFound();
  }

  const siblingLinks = products.map((item) => ({
    href: `/${item.silo}/${item.slug}`,
    label: item.name,
  }));

  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: product.name,
          description: product.summary,
          offers: product.offers,
          path: `/backlinks/${product.slug}`,
        })}
      />
      <JsonLd data={buildFaqSchema(product.faq)} />
      <ProductDetailPage product={product} siblingLinks={siblingLinks} />
    </>
  );
}
