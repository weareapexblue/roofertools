import { JsonLd } from "@/components/json-ld";
import { SiloOverview } from "@/components/silo-overview";
import { getProductsBySilo } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Roofing Local SEO Starter",
  description:
    "Productized local SEO starter package for single GBP roofing locations with monthly reporting and execution.",
  path: "/local-seo",
  keywords: ["roofing SEO packages", "local SEO for roofers", "SEO for roofing companies"],
});

export default function LocalSeoPage() {
  const products = getProductsBySilo("local-seo");

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Roofing Local SEO Starter",
          description:
            "Local SEO infrastructure for single-location roofing companies with recurring monthly execution.",
        }}
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
