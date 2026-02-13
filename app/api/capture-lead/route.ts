import { NextResponse } from "next/server";

export const runtime = "nodejs";

type CaptureLeadPayload = {
  email?: string;
  source?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: CaptureLeadPayload;

  try {
    payload = (await request.json()) as CaptureLeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  if (!payload.email || !EMAIL_REGEX.test(payload.email)) {
    return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
  }

  const leadRecord = {
    email: payload.email.toLowerCase(),
    source: payload.source || "unknown",
    capturedAt: new Date().toISOString(),
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadRecord),
      });

      if (!response.ok) {
        return NextResponse.json(
          { error: "Lead capture endpoint rejected request." },
          { status: 502 }
        );
      }
    } catch {
      return NextResponse.json(
        { error: "Unable to forward lead to configured endpoint." },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ success: true });
}
