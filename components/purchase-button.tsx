"use client";

import { useState } from "react";

type PurchaseButtonProps = {
  productId: string;
  offerId: string;
  label: string;
};

export function PurchaseButton({ productId, offerId, label }: PurchaseButtonProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function handleCheckout() {
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, offerId }),
      });

      const payload = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !payload.url) {
        throw new Error(payload.error || "Checkout initialization failed.");
      }

      window.location.href = payload.url;
    } catch (checkoutError) {
      setStatus("error");
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Unable to start checkout right now."
      );
      return;
    }

    setStatus("idle");
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={handleCheckout}
        disabled={status === "loading"}
        className="w-full rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Launching Checkout..." : label}
      </button>
      {status === "error" ? (
        <p className="text-xs text-[var(--danger)]">{error}</p>
      ) : null}
    </div>
  );
}
