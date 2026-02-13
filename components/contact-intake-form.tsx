"use client";

import { FormEvent, useState } from "react";

type IntakeState = {
  fullName: string;
  email: string;
  company: string;
  markets: string;
  website: string;
  message: string;
};

const INITIAL_STATE: IntakeState = {
  fullName: "",
  email: "",
  company: "",
  markets: "",
  website: "",
  message: "",
};

export function ContactIntakeForm() {
  const [form, setForm] = useState<IntakeState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/capture-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          source: "multi-location-seo-contact-form",
          fullName: form.fullName,
          company: form.company,
          markets: form.markets,
          website: form.website,
          message: form.message,
        }),
      });

      const payload = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !payload.success) {
        throw new Error(payload.error || "Unable to submit form.");
      }

      setStatus("success");
      setForm(INITIAL_STATE);
    } catch (submissionError) {
      setStatus("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to submit form right now."
      );
    }
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          label="Full Name"
          value={form.fullName}
          onChange={(value) => setForm((prev) => ({ ...prev, fullName: value }))}
          required
        />
        <InputField
          label="Business Email"
          type="email"
          value={form.email}
          onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
          required
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          label="Company"
          value={form.company}
          onChange={(value) => setForm((prev) => ({ ...prev, company: value }))}
          required
        />
        <InputField
          label="Website"
          type="url"
          value={form.website}
          onChange={(value) => setForm((prev) => ({ ...prev, website: value }))}
          placeholder="https://"
        />
      </div>

      <InputField
        label="Target Markets / Cities"
        value={form.markets}
        onChange={(value) => setForm((prev) => ({ ...prev, markets: value }))}
        placeholder="Example: Dallas, Fort Worth, Arlington"
        required
      />

      <TextAreaField
        label="Growth Objective"
        value={form.message}
        onChange={(value) => setForm((prev) => ({ ...prev, message: value }))}
        placeholder="Share your current footprint, timeline, and multi-location SEO goals."
        required
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : "Submit Multi-Location SEO Request"}
        </button>
        <p className="text-xs text-[var(--muted)]">
          Secure submission. We use this to qualify high-volume SEO build requests.
        </p>
      </div>

      {status === "success" ? (
        <p className="rounded-lg border border-[var(--success)] bg-[color:color-mix(in_srgb,var(--success)_12%,transparent)] px-4 py-3 text-sm text-[var(--text)]">
          Request submitted. We received your information.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-lg border border-[var(--danger)] bg-[color:color-mix(in_srgb,var(--danger)_12%,transparent)] px-4 py-3 text-sm text-[var(--text)]">
          {error}
        </p>
      ) : null}
    </form>
  );
}

function InputField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
      {label}
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-3 text-sm text-[var(--text)] outline-none ring-[var(--accent)] transition focus:ring-2"
      />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
      {label}
      <textarea
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        rows={5}
        className="mt-2 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] px-4 py-3 text-sm text-[var(--text)] outline-none ring-[var(--accent)] transition focus:ring-2"
      />
    </label>
  );
}
