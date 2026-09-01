import { Moon, Sun } from "lucide-react";
import { resolvedTheme, useTheme } from "@/lib/theme";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const theme = useTheme((s) => s.theme);
  const setTheme = useTheme((s) => s.setTheme);
  const [mounted, setMounted] = useState(false);
  const [resolved, setResolved] = useState<"light" | "dark">("light");

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const update = () => setResolved(resolvedTheme(theme));
    update();
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => theme === "system" && update();
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [theme]);

  // Keep <html> class + theme-color meta in sync
  useEffect(() => {
    const r = resolvedTheme(theme);
    document.documentElement.classList.toggle("dark", r === "dark");
    // Keep PWA theme-color up to date (light/dark handled by injected metas, but primary one for JS toggle)
    let meta = document.querySelector('meta[name="theme-color"]:not([media])') as HTMLMetaElement | null;
    if (meta) meta.content = r === "dark" ? "#0f2a52" : "#1E4D8C";
  }, [theme]);

  const toggle = () => {
    // Cycle: system -> light -> dark -> system, but UX simpler: just light<->dark, system as long-press
    // We expose a 2-state toggle that flips resolved value, preserving "system" as explicit third via context menu / long press
    const r = resolvedTheme(theme);
    setTheme(r === "dark" ? "light" : "dark");
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setTheme("system");
  };

  const isDark = mounted ? resolved === "dark" : false;
  const label = !mounted ? "Тема" : theme === "system" ? `Авто (${resolved})` : isDark ? "Тёмная" : "Светлая";

  return (
    <button
      type="button"
      onClick={toggle}
      onContextMenu={handleContextMenu}
      aria-label={label}
      title={`${label} — правый клик для авто`}
      className="inline-flex size-9 items-center justify-center rounded-full border border-line bg-paper text-muted transition-colors hover:bg-azulejo-soft hover:text-azulejo-deep dark:border-line/60"
    >
      {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  );
}
