"use client";

import { FormEvent, useMemo, useState } from "react";

type GatePayload = {
  email: string;
  source: string;
};

export function FreeToolsSuite() {
  const [email, setEmail] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [gateStatus, setGateStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [gateError, setGateError] = useState("");

  const [seoLeads, setSeoLeads] = useState(30);
  const [seoCloseRate, setSeoCloseRate] = useState(28);
  const [seoAvgJob, setSeoAvgJob] = useState(9500);
  const [seoCost, setSeoCost] = useState(3000);

  const [stormHomes, setStormHomes] = useState(1200);
  const [stormCaptureRate, setStormCaptureRate] = useState(1.4);
  const [stormCloseRate, setStormCloseRate] = useState(35);
  const [stormAvgTicket, setStormAvgTicket] = useState(13200);

  const [channelBudget, setChannelBudget] = useState(4500);
  const [seoLeadVolume, setSeoLeadVolume] = useState(24);
  const [adsLeadVolume, setAdsLeadVolume] = useState(18);
  const [blendCloseRate, setBlendCloseRate] = useState(27);
  const [blendAvgJob, setBlendAvgJob] = useState(10500);

  const roi = useMemo(() => {
    const closedJobs = seoLeads * (seoCloseRate / 100);
    const grossRevenue = closedJobs * seoAvgJob;
    const roiPercent = seoCost > 0 ? ((grossRevenue - seoCost) / seoCost) * 100 : 0;

    return {
      closedJobs,
      grossRevenue,
      roiPercent,
    };
  }, [seoLeads, seoCloseRate, seoAvgJob, seoCost]);

  const stormEstimate = useMemo(() => {
    const potentialLeads = stormHomes * (stormCaptureRate / 100);
    const closedJobs = potentialLeads * (stormCloseRate / 100);
    const revenue = closedJobs * stormAvgTicket;

    return {
      potentialLeads,
      closedJobs,
      revenue,
    };
  }, [stormHomes, stormCaptureRate, stormCloseRate, stormAvgTicket]);

  const comparison = useMemo(() => {
    const totalLeads = seoLeadVolume + adsLeadVolume;
    const blendedCpl = totalLeads > 0 ? channelBudget / totalLeads : 0;
    const projectedClosed = totalLeads * (blendCloseRate / 100);
    const projectedRevenue = projectedClosed * blendAvgJob;

    return {
      blendedCpl,
      projectedClosed,
      projectedRevenue,
    };
  }, [channelBudget, seoLeadVolume, adsLeadVolume, blendCloseRate, blendAvgJob]);

  async function handleUnlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setGateStatus("submitting");
    setGateError("");

    try {
      const payload: GatePayload = {
        email,
        source: "free-tools-and-prompt-vault",
      };

      const response = await fetch("/api/capture-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Email capture failed.");
      }

      setIsUnlocked(true);
      setGateStatus("idle");
    } catch (captureError) {
      setGateStatus("error");
      setGateError(
        captureError instanceof Error
          ? captureError.message
          : "Unable to unlock tools right now."
      );
    }
  }

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-soft)]">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">Unlock Tool Results + Elite Prompt Vault</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">
          Submit business email to access live calculator outputs and gated prompt downloads.
        </p>

        {isUnlocked ? (
          <p className="mt-4 rounded-xl border border-[var(--success)] bg-[color:color-mix(in_srgb,var(--success)_12%,transparent)] px-4 py-3 text-sm text-[var(--text)]">
            Access unlocked. Tool outputs and prompt downloads are now available.
          </p>
        ) : (
          <form onSubmit={handleUnlock} className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@roofingcompany.com"
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-3 text-sm text-[var(--text)] outline-none ring-[var(--accent)] transition focus:ring-2"
            />
            <button
              type="submit"
              disabled={gateStatus === "submitting"}
              className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {gateStatus === "submitting" ? "Unlocking..." : "Unlock Results"}
            </button>
          </form>
        )}

        {gateStatus === "error" ? (
          <p className="mt-3 text-xs text-[var(--danger)]">{gateError}</p>
        ) : null}
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--text)]">Roofing SEO ROI Calculator</h3>
          <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            <InputRow label="Monthly leads" value={seoLeads} setValue={setSeoLeads} />
            <InputRow label="Close rate (%)" value={seoCloseRate} setValue={setSeoCloseRate} />
            <InputRow label="Average job value" value={seoAvgJob} setValue={setSeoAvgJob} />
            <InputRow label="Monthly marketing cost" value={seoCost} setValue={setSeoCost} />
          </div>

          {isUnlocked ? (
            <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-4 text-sm">
              <p>Projected closed jobs: <strong>{roi.closedJobs.toFixed(1)}</strong></p>
              <p>Projected revenue: <strong>${Math.round(roi.grossRevenue).toLocaleString()}</strong></p>
              <p>Estimated ROI: <strong>{roi.roiPercent.toFixed(1)}%</strong></p>
            </div>
          ) : (
            <LockedNotice />
          )}
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--text)]">Storm Revenue Estimator</h3>
          <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            <InputRow label="Homes in impact zone" value={stormHomes} setValue={setStormHomes} />
            <InputRow
              label="Lead capture rate (%)"
              value={stormCaptureRate}
              setValue={setStormCaptureRate}
              step="0.1"
            />
            <InputRow label="Close rate (%)" value={stormCloseRate} setValue={setStormCloseRate} />
            <InputRow label="Average ticket" value={stormAvgTicket} setValue={setStormAvgTicket} />
          </div>

          {isUnlocked ? (
            <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-4 text-sm">
              <p>Potential leads: <strong>{stormEstimate.potentialLeads.toFixed(1)}</strong></p>
              <p>Projected closes: <strong>{stormEstimate.closedJobs.toFixed(1)}</strong></p>
              <p>Projected storm revenue: <strong>${Math.round(stormEstimate.revenue).toLocaleString()}</strong></p>
            </div>
          ) : (
            <LockedNotice />
          )}
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--text)]">
            Roofing Marketing Cost Comparison Tool
          </h3>
          <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            <InputRow label="Combined monthly spend" value={channelBudget} setValue={setChannelBudget} />
            <InputRow label="SEO lead volume" value={seoLeadVolume} setValue={setSeoLeadVolume} />
            <InputRow label="Ads lead volume" value={adsLeadVolume} setValue={setAdsLeadVolume} />
            <InputRow label="Blended close rate (%)" value={blendCloseRate} setValue={setBlendCloseRate} />
            <InputRow label="Average job value" value={blendAvgJob} setValue={setBlendAvgJob} />
          </div>

          {isUnlocked ? (
            <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-4 text-sm">
              <p>Blended CPL: <strong>${comparison.blendedCpl.toFixed(2)}</strong></p>
              <p>Projected closes: <strong>{comparison.projectedClosed.toFixed(1)}</strong></p>
              <p>Projected revenue: <strong>${Math.round(comparison.projectedRevenue).toLocaleString()}</strong></p>
            </div>
          ) : (
            <LockedNotice />
          )}
        </article>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <h3 className="text-xl font-semibold tracking-tight text-[var(--text)]">Elite Roofing Prompt Vault</h3>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Cutting-Edge AI Prompt System for Roofing Companies.
        </p>

        <ul className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Insurance objection handling",
            "Estimate follow-up automation",
            "City page generation",
            "Review response optimization",
            "Competitor gap analysis",
            "AI Overview content formatting",
            "Sales script enhancement",
            "Storm documentation assistant",
          ].map((prompt) => (
            <li
              key={prompt}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-2 text-sm text-[var(--text)]"
            >
              {prompt}
            </li>
          ))}
        </ul>

        {isUnlocked ? (
          <a
            href="/downloads/elite-roofing-prompt-vault.txt"
            className="mt-6 inline-flex rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)]"
          >
            Download Prompt Vault
          </a>
        ) : (
          <p className="mt-5 text-sm font-medium text-[var(--muted)]">
            Submit email above to enable downloads.
          </p>
        )}
      </section>
    </div>
  );
}

function InputRow({
  label,
  value,
  setValue,
  step,
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
  step?: string;
}) {
  return (
    <label className="block text-xs uppercase tracking-[0.08em] text-[var(--muted)]">
      {label}
      <input
        type="number"
        value={value}
        step={step}
        onChange={(event) => setValue(Number(event.target.value))}
        className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] px-3 py-2 text-sm text-[var(--text)] outline-none ring-[var(--accent)] focus:ring-2"
      />
    </label>
  );
}

function LockedNotice() {
  return (
    <p className="mt-5 rounded-lg border border-dashed border-[var(--border)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
      Email gate required to view results.
    </p>
  );
}
