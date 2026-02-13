# RooferMarketingTools.com

Productized ecommerce-style SEO storefront for roofing companies.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Stripe Checkout API integration
- Email lead-capture endpoint + gated tool access

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Create env file:

```bash
cp .env.example .env.local
```

3. Add Stripe and optional lead webhook values in `.env.local`.

4. Start dev server:

```bash
npm run dev
```

## Core Route Map

- `/` Homepage storefront
- `/backlinks`
- `/press-releases`
- `/local-seo`
- `/microsites`
- `/free-tools`
- `/resources` + 20 dynamic anchor pages
- `/blog` + 7 dynamic posts + tag pages
- `/legal/refund-policy`
- `/legal/terms`
- `/legal/privacy`

## API Routes

- `POST /api/checkout`: creates Stripe Checkout Session from product + offer IDs
- `POST /api/capture-lead`: captures gated-tool email and forwards to optional webhook

## SEO Infrastructure

- Page metadata and canonical URLs
- JSON-LD (Product, Article, FAQ, Organization)
- `app/sitemap.ts`
- `app/robots.ts`

