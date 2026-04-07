import { JsonLd } from "@/components/json-ld";
import { SiloOverview } from "@/components/silo-overview";
import { getProductsBySilo } from "@/lib/products";
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roofing Local SEO Starter for Single-Location Roofers",
  description:
    "Productized roofing local SEO starter package for single GBP locations, monthly execution, backlink support, reporting, and service-area visibility.",
  path: "/local-seo",
  keywords: [
    "roofing SEO packages",
    "local SEO for roofers",
    "roofing local SEO starter",
    "SEO for roofing companies",
  ],
});

export default function LocalSeoPage() {
  const products = getProductsBySilo("local-seo");

  return (
    <>
      <JsonLd
        data={buildCollectionPageSchema({
          name: "Roofing Local SEO Starter",
          description:
            "Local SEO infrastructure for single-location roofing companies with recurring monthly execution.",
          path: "/local-seo",
          items: products.map((product) => ({
            name: product.name,
            path: `/${product.silo}/${product.slug}`,
            description: product.summary,
          })),
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Roofing Local SEO Starter", path: "/local-seo" },
        ])}
      />
      <SiloOverview
        eyebrow="Local SEO"
        title="Roofing Local SEO Starter Package"
        description="Ideal for single GBP roofing locations. Includes monthly backlinks, content, on-page optimization, uptime monitoring, dashboard access, and PDF reporting."
        products={products}
        relatedLinks={[
          { href: "/resources/local-seo-for-roofers", label: "Local SEO Guide" },
          { href: "/resources/roofing-google-business-optimization", label: "GBP Optimization" },
          { href: "/microsites", label: "Microsites" },
        ]}
      />
    </>
  );
}
