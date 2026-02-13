import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/lib/site";

export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildFaqSchema(
  faqs: Array<{ question: string; answer: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildProductSchema({
  name,
  description,
  offers,
  path,
}: {
  name: string;
  description: string;
  offers: Array<{ priceLabel: string; name: string }>;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    category: "Roofing Marketing Tools",
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    offers: offers.map((offer) => ({
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: offer.priceLabel.replace(/[^0-9.]/g, ""),
      name: offer.name,
      url: `${SITE_URL}${path}`,
    })),
  };
}

export function buildArticleSchema({
  headline,
  description,
  path,
  publishedAt,
  keywords,
}: {
  headline: string;
  description: string;
  path: string;
  publishedAt: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished: publishedAt,
    dateModified: publishedAt,
    mainEntityOfPage: `${SITE_URL}${path}`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    keywords,
  };
}
