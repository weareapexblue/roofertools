import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { ProductDetailPage } from "@/components/product-detail-page";
import { getProductBySiloAndSlug, products, getProductsBySilo } from "@/lib/products";
import { buildFaqSchema, buildMetadata, buildProductSchema } from "@/lib/seo";

export function generateStaticParams() {
  return getProductsBySilo("microsites").map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySiloAndSlug("microsites", slug);

  if (!product) {
    return buildMetadata({
      title: "Microsite Product Not Found",
      description: "Requested microsite product does not exist.",
      path: `/microsites/${slug}`,
    });
  }

  return buildMetadata({
    title: product.name,
    description: product.summary,
    path: `/microsites/${product.slug}`,
    keywords: ["roofing SEO microsite", "roofing lead generation", product.name],
  });
}

export default async function MicrositeProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySiloAndSlug("microsites", slug);

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
          path: `/microsites/${product.slug}`,
        })}
      />
      <JsonLd data={buildFaqSchema(product.faq)} />
      <ProductDetailPage product={product} siblingLinks={siblingLinks} />
    </>
  );
}
