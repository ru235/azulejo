import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "system",
      setTheme: (theme) => set({ theme }),
    }),
    { name: "azulejo-theme" }
  )
);

export function resolvedTheme(theme: Theme): "light" | "dark" {
  if (theme !== "system") return theme;
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Inline script to run before paint — avoids FOUC. */
export const themeInitScript = `(() => {
  try {
    const raw = localStorage.getItem('azulejo-theme');
    const t = raw ? JSON.parse(raw).state?.theme : 'system';
    const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = t === 'dark' || (t === 'system' && sysDark);
    document.documentElement.classList.toggle('dark', dark);
  } catch {}
})();`;
