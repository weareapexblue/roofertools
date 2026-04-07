import type { Metadata } from "next";

import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

const DEFAULT_OG_IMAGE = "/og/roofer-marketing-tools.webp";
const DEFAULT_KEYWORDS = [
  "roofer marketing tools",
  "roofing marketing tools",
  "marketing for roofers",
  "SEO for roofing companies",
  "roofing backlinks",
  "local SEO for roofers",
  "roofing lead generation",
];

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  openGraphTitle,
  openGraphDescription,
  openGraphImage,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  openGraphTitle?: string;
  openGraphDescription?: string;
  openGraphImage?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogTitle = openGraphTitle || title;
  const ogDescription = openGraphDescription || description;
  const image = openGraphImage || DEFAULT_OG_IMAGE;
  const ogImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title,
    description,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "Roofing Marketing",
    keywords: [...new Set([...(keywords || []), ...DEFAULT_KEYWORDS])],
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImageUrl],
    },
  };
}

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    slogan: "Digital Growth Infrastructure for Roofing Companies",
    email: CONTACT_EMAIL,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "Roofing marketing",
      "Roofing SEO",
      "Roofing backlinks",
      "Local SEO for roofers",
      "Press release distribution",
      "SEO microsites",
    ],
    sameAs: ["https://seoaha.com", "https://ppckitchen.com", "https://apexblueai.com"],
  };
}

export function buildWebsiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Productized roofing marketing tools, SEO playbooks, backlinks, press releases, local SEO, microsites, and free growth calculators.",
    inLanguage: "en-US",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    about: [
      "Roofer marketing",
      "SEO for roofing companies",
      "Roofing lead generation",
      "Roofing authority building",
    ],
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildCollectionPageSchema({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: Array<{ name: string; path: string; description?: string }>;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}${path}#collection`,
    name,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    mainEntity: buildItemListSchema({ name, path, items }),
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
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    seller: {
      "@id": `${SITE_URL}/#organization`,
    },
    offers: offers.map((offer) => ({
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: offer.priceLabel.replace(/[^0-9.]/g, ""),
      name: offer.name,
      url: `${SITE_URL}${path}`,
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
    })),
  };
}

export function buildArticleSchema({
  headline,
  description,
  path,
  publishedAt,
  modifiedAt,
  keywords,
  type = "Article",
}: {
  headline: string;
  description: string;
  path: string;
  publishedAt: string;
  modifiedAt?: string;
  keywords?: string[];
  type?: "Article" | "BlogPosting";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    description,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    mainEntityOfPage: `${SITE_URL}${path}`,
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    keywords,
    inLanguage: "en-US",
  };
}

export function buildItemListSchema({
  name,
  path,
  items,
}: {
  name: string;
  path: string;
  items: Array<{ name: string; path: string; description?: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: `${SITE_URL}${path}`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}${item.path}`,
      name: item.name,
      description: item.description,
    })),
  };
}
