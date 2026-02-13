import { NextResponse } from "next/server";
import Stripe from "stripe";

import { products } from "@/lib/products";

export const runtime = "nodejs";

type CheckoutPayload = {
  productId?: string;
  offerId?: string;
};

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: "Missing STRIPE_SECRET_KEY configuration." },
      { status: 500 }
    );
  }

  let payload: CheckoutPayload;

  try {
    payload = (await request.json()) as CheckoutPayload;
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  if (!payload.productId || !payload.offerId) {
    return NextResponse.json({ error: "Missing product or offer." }, { status: 400 });
  }

  const product = products.find((entry) => entry.id === payload.productId);
  const offer = product?.offers.find((entry) => entry.id === payload.offerId);

  if (!product || !offer) {
    return NextResponse.json({ error: "Product offer not found." }, { status: 404 });
  }

  const stripePriceId = process.env[offer.stripePriceEnv];

  if (!stripePriceId) {
    return NextResponse.json(
      {
        error: `Missing Stripe price configuration for ${offer.name}. Set ${offer.stripePriceEnv}.`,
      },
      { status: 500 }
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: offer.mode,
      line_items: [
        {
          price: stripePriceId,
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/?checkout=success&product=${product.id}`,
      cancel_url: `${siteUrl}/${product.silo}/${product.slug}?checkout=cancelled`,
      allow_promotion_codes: false,
      billing_address_collection: "auto",
      metadata: {
        productId: product.id,
        offerId: offer.id,
      },
    });

    if (!session.url) {
      throw new Error("No checkout URL returned by Stripe.");
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Checkout creation failed.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
