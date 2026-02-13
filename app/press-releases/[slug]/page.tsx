import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { ProductDetailPage } from "@/components/product-detail-page";
import { getProductBySiloAndSlug, products, getProductsBySilo } from "@/lib/products";
import { buildFaqSchema, buildMetadata, buildProductSchema } from "@/lib/seo";

export function generateStaticParams() {
  return getProductsBySilo("press-releases").map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySiloAndSlug("press-releases", slug);

  if (!product) {
    return buildMetadata({
      title: "Press Release Product Not Found",
      description: "Requested press release product does not exist.",
      path: `/press-releases/${slug}`,
    });
  }

  return buildMetadata({
    title: product.name,
    description: product.summary,
    path: `/press-releases/${product.slug}`,
    keywords: ["roofing press release distribution", "roofing marketing tools", product.name],
  });
}

export default async function PressReleaseProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySiloAndSlug("press-releases", slug);

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
          path: `/press-releases/${product.slug}`,
        })}
      />
      <JsonLd data={buildFaqSchema(product.faq)} />
      <ProductDetailPage product={product} siblingLinks={siblingLinks} />
    </>
  );
}
