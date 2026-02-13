import { buildResourceSections, type ResourceSection } from "@/lib/resource-playbooks";
export type ResourceGuide = {
  slug: string;
  title: string;
  description: string;
  focusKeyword: string;
  relatedProductIds: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const resources: ResourceGuide[] = [
  {
    slug: "roofer-marketing-guide",
    title: "Roofer Marketing Guide",
    description:
      "A complete framework for building profitable roofing lead flow through search visibility, authority assets, and conversion systems.",
    focusKeyword: "roofer marketing",
    relatedProductIds: [
      "premium-roofing-backlink-packs",
      "roofing-local-seo-starter",
      "roofing-seo-microsite-7-page-lead-engine",
    ],
    faq: buildDefaultFaq("roofer marketing"),
  },
  {
    slug: "seo-for-roofing-companies",
    title: "SEO for Roofing Companies",
    description:
      "How roofing companies build sustained visibility with local intent coverage, authority links, and structured conversion paths.",
    focusKeyword: "SEO for roofing companies",
    relatedProductIds: [
      "roofing-local-seo-starter",
      "premium-roofing-backlink-packs",
      "roofing-authority-microsite-50-page-cluster-site",
    ],
    faq: buildDefaultFaq("SEO for roofing companies"),
  },
  {
    slug: "roofing-contractor-lead-generation",
    title: "Roofing Contractor Lead Generation",
    description:
      "Lead generation strategy for roofers across branded search, service queries, and city-intent capture.",
    focusKeyword: "roofing contractor lead generation",
    relatedProductIds: [
      "roofing-seo-microsite-7-page-lead-engine",
      "roofing-local-seo-starter",
      "seo-supercharged-press-releases",
    ],
    faq: buildDefaultFaq("roofing contractor lead generation"),
  },
  {
    slug: "roofing-backlinks-explained",
    title: "Roofing Backlinks Explained",
    description:
      "What high-quality roofing backlinks are, how they work, and why contextual relevance matters more than volume.",
    focusKeyword: "roofing backlinks",
    relatedProductIds: ["premium-roofing-backlink-packs"],
    faq: buildDefaultFaq("roofing backlinks"),
  },
  {
    slug: "roofing-press-release-distribution",
    title: "Roofing Press Release Distribution",
    description:
      "How SEO-oriented press release distribution supports authority and brand-level search signals.",
    focusKeyword: "roofing press release distribution",
    relatedProductIds: ["seo-supercharged-press-releases"],
    faq: buildDefaultFaq("roofing press release distribution"),
  },
  {
    slug: "local-seo-for-roofers",
    title: "Local SEO for Roofers",
    description:
      "Execution model for ranking roofing companies in local maps and organic results without wasted scope.",
    focusKeyword: "local SEO for roofers",
    relatedProductIds: ["roofing-local-seo-starter", "premium-roofing-backlink-packs"],
    faq: buildDefaultFaq("local SEO for roofers"),
  },
  {
    slug: "roofing-google-business-optimization",
    title: "Roofing Google Business Optimization",
    description:
      "Practical GBP optimization patterns that improve map pack relevance and conversion readiness.",
    focusKeyword: "roofing Google Business optimization",
    relatedProductIds: ["roofing-local-seo-starter"],
    faq: buildDefaultFaq("roofing Google Business optimization"),
  },
  {
    slug: "roofing-website-seo",
    title: "Roofing Website SEO",
    description:
      "Site architecture, service-page intent mapping, and schema strategy for scalable roofing SEO.",
    focusKeyword: "roofing website SEO",
    relatedProductIds: [
      "roofing-seo-microsite-7-page-lead-engine",
      "roofing-authority-microsite-50-page-cluster-site",
    ],
    faq: buildDefaultFaq("roofing website SEO"),
  },
  {
    slug: "roofing-authority-building-strategy",
    title: "Roofing Authority Building Strategy",
    description:
      "Authority-building playbook for roofing brands combining links, mentions, distribution, and trust assets.",
    focusKeyword: "roofing authority building strategy",
    relatedProductIds: ["premium-roofing-backlink-packs", "seo-supercharged-press-releases"],
    faq: buildDefaultFaq("roofing authority building strategy"),
  },
  {
    slug: "roofing-digital-marketing-infrastructure",
    title: "Roofing Digital Marketing Infrastructure",
    description:
      "How to replace fragmented tactics with repeatable, measurable digital growth infrastructure.",
    focusKeyword: "roofing digital marketing infrastructure",
    relatedProductIds: [
      "roofing-local-seo-starter",
      "roofing-authority-microsite-50-page-cluster-site",
      "seo-supercharged-press-releases",
    ],
    faq: buildDefaultFaq("roofing digital marketing infrastructure"),
  },
  {
    slug: "marketing-for-commercial-roofers",
    title: "Marketing for Commercial Roofers",
    description:
      "Commercial roofing marketing model focused on high-ticket intent, trust framing, and long-cycle conversion paths.",
    focusKeyword: "marketing for commercial roofers",
    relatedProductIds: [
      "roofing-authority-microsite-50-page-cluster-site",
      "seo-supercharged-press-releases",
    ],
    faq: buildDefaultFaq("marketing for commercial roofers"),
  },
  {
    slug: "marketing-for-residential-roofers",
    title: "Marketing for Residential Roofers",
    description:
      "Residential roofing growth strategy for neighborhood-level demand capture and fast-response lead systems.",
    focusKeyword: "marketing for residential roofers",
    relatedProductIds: ["roofing-local-seo-starter", "roofing-seo-microsite-7-page-lead-engine"],
    faq: buildDefaultFaq("marketing for residential roofers"),
  },
  {
    slug: "storm-season-roofing-marketing",
    title: "Storm Season Roofing Marketing",
    description:
      "Storm-season response framework to convert demand spikes into qualified booked jobs.",
    focusKeyword: "storm season roofing marketing",
    relatedProductIds: [
      "seo-supercharged-press-releases",
      "roofing-seo-microsite-7-page-lead-engine",
      "premium-roofing-backlink-packs",
    ],
    faq: buildDefaultFaq("storm season roofing marketing"),
  },
  {
    slug: "roofing-reputation-management",
    title: "Roofing Reputation Management",
    description:
      "Reputation systems for roofing companies: review velocity, sentiment control, and trust signal consistency.",
    focusKeyword: "roofing reputation management",
    relatedProductIds: ["roofing-local-seo-starter", "seo-supercharged-press-releases"],
    faq: buildDefaultFaq("roofing reputation management"),
  },
  {
    slug: "roofing-content-marketing",
    title: "Roofing Content Marketing",
    description:
      "Content strategy for roofing brands that maps buying stages to pages, internal links, and conversion events.",
    focusKeyword: "roofing content marketing",
    relatedProductIds: ["roofing-authority-microsite-50-page-cluster-site"],
    faq: buildDefaultFaq("roofing content marketing"),
  },
  {
    slug: "roofing-keyword-research-guide",
    title: "Roofing Keyword Research Guide",
    description:
      "Keyword strategy for roofing campaigns using intent clusters, location modifiers, and service-line depth.",
    focusKeyword: "roofing keyword research",
    relatedProductIds: ["roofing-local-seo-starter", "roofing-seo-microsite-7-page-lead-engine"],
    faq: buildDefaultFaq("roofing keyword research"),
  },
  {
    slug: "roofing-conversion-optimization",
    title: "Roofing Conversion Optimization",
    description:
      "How roofers increase booked jobs from existing traffic through UX, offers, and lead funnel adjustments.",
    focusKeyword: "roofing conversion optimization",
    relatedProductIds: [
      "roofing-seo-microsite-7-page-lead-engine",
      "roofing-authority-microsite-50-page-cluster-site",
    ],
    faq: buildDefaultFaq("roofing conversion optimization"),
  },
  {
    slug: "roofing-search-engine-rankings",
    title: "Roofing Search Engine Rankings",
    description:
      "Ranking model for roofing keywords using authority, technical SEO, and topical coverage.",
    focusKeyword: "roofing search engine rankings",
    relatedProductIds: ["premium-roofing-backlink-packs", "roofing-local-seo-starter"],
    faq: buildDefaultFaq("roofing search engine rankings"),
  },
  {
    slug: "roofing-marketing-costs-explained",
    title: "Roofing Marketing Costs Explained",
    description:
      "Cost framework for roofing marketing channels and how to benchmark spend against margin and close rate.",
    focusKeyword: "roofing marketing costs",
    relatedProductIds: [
      "roofing-local-seo-starter",
      "premium-roofing-backlink-packs",
      "seo-supercharged-press-releases",
    ],
    faq: buildDefaultFaq("roofing marketing costs"),
  },
  {
    slug: "roofing-marketing-roi-framework",
    title: "Roofing Marketing ROI Framework",
    description:
      "ROI operating model for roofing growth investments across SEO, authority distribution, and conversion systems.",
    focusKeyword: "roofing marketing ROI",
    relatedProductIds: [
      "roofing-local-seo-starter",
      "roofing-authority-microsite-50-page-cluster-site",
      "premium-roofing-backlink-packs",
    ],
    faq: buildDefaultFaq("roofing marketing ROI"),
  },
];

export function getResourceSections(resource: ResourceGuide): ResourceSection[] {
  return buildResourceSections(resource);
}

function buildDefaultFaq(topic: string) {
  return [
    {
      question: `How long does ${topic} typically take to produce measurable results?`,
      answer:
        "Most roofing campaigns show directional movement within the first 60-120 days when technical issues are resolved and core pages are deployed, but competitive markets may require longer authority-building windows.",
    },
    {
      question: `What are the biggest mistakes companies make with ${topic}?`,
      answer:
        "The most common mistakes are shallow page coverage, weak internal linking, low-quality backlink purchases, and tracking dashboards that report vanity metrics instead of qualified pipeline outcomes.",
    },
    {
      question: `How should roofing teams budget for ${topic}?`,
      answer:
        "Start with unit economics: target acquisition cost, average job margin, and close rate. Then allocate spend across foundational local SEO, authority assets, and conversion optimization based on expected payback windows.",
    },
    {
      question: `Can smaller roofing companies compete in ${topic}?`,
      answer:
        "Yes. Smaller teams can compete by focusing on tightly scoped city-service clusters, disciplined local optimization, and high-quality authority signals instead of broad low-quality coverage.",
    },
    {
      question: `Which KPIs matter most for ${topic}?`,
      answer:
        "Track qualified leads, lead-to-inspection rate, close rate, cost per qualified lead, and gross margin by channel. Rankings matter, but revenue-linked KPIs should guide decisions.",
    },
  ];
}

export function getResourceBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
