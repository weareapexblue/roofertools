"use client";

import { useSyncExternalStore } from "react";

type ThemeMode = "light" | "dark";

export function ThemeToggle() {
  const currentTheme = useSyncExternalStore(
    subscribeToThemeChanges,
    readThemeSnapshot,
    readServerThemeSnapshot
  );
  const nextTheme: ThemeMode = currentTheme === "light" ? "dark" : "light";

  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.dataset.theme = nextTheme;
        window.localStorage.setItem("rmt-theme", nextTheme);
        window.dispatchEvent(new Event("rmt-theme-change"));
      }}
      className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
      aria-label="Toggle color mode"
    >
      {currentTheme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

function subscribeToThemeChanges(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const onMediaChange = () => onStoreChange();
  const onThemeEvent = () => onStoreChange();

  mediaQuery.addEventListener("change", onMediaChange);
  window.addEventListener("rmt-theme-change", onThemeEvent);

  return () => {
    mediaQuery.removeEventListener("change", onMediaChange);
    window.removeEventListener("rmt-theme-change", onThemeEvent);
  };
}

function readThemeSnapshot(): ThemeMode {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function readServerThemeSnapshot(): ThemeMode {
  return "light";
}
