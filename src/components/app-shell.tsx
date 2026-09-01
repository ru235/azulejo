import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpenCheck, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { AzulejoBand, AzulejoMark } from "@/components/azulejo-mark";
import { DialectToggle } from "@/components/dialect-toggle";
import { preloadVoices } from "@/lib/speech";
import { navItems, practiceItem } from "@/lib/data/nav";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

const mobileTabs = [
  navItems[0],
  navItems[1],
  navItems[2],
  { to: "/frases", label: "Слова", short: "Слова", icon: navItems[3].icon },
  { to: practiceItem.to, label: practiceItem.label, short: practiceItem.short, icon: BookOpenCheck },
];

function isActivePath(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  if (to === "/frases") {
    return ["/frases", "/numeros", "/gramatica"].includes(pathname);
  }
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const completed = useProgress((s) => s.completed);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    preloadVoices();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-dvh bg-bg text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-paper focus:px-3 focus:py-2"
      >
        К содержанию
      </a>

      <header className="sticky top-0 z-30 border-b border-line/80 bg-bg/90 backdrop-blur-md">
        <AzulejoBand className="h-1.5 w-full" />
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
          <Link to="/" className="flex items-center gap-2.5">
            <AzulejoMark className="size-8" />
            <span className="leading-none">
              <span className="block font-display text-lg font-semibold tracking-tight">
                Azulejo
              </span>
              <span className="hidden text-[11px] text-muted sm:block">
                португальский с нуля
              </span>
            </span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <DialectToggle />
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-[12px] lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Меню"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
        {open ? (
          <nav className="border-t border-line bg-paper px-4 py-3 lg:hidden">
            <ul className="grid grid-cols-2 gap-1">
              {[...navItems, practiceItem].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn(
                      "flex h-11 items-center gap-2 rounded-[12px] px-3 text-sm",
                      isActivePath(pathname, item.to)
                        ? "bg-azulejo-soft font-medium text-azulejo-deep"
                        : "text-ink",
                    )}
                  >
                    <item.icon className="size-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>

      <div className="mx-auto flex max-w-6xl">
        <aside className="sticky top-[62px] hidden h-[calc(100dvh-62px)] w-56 shrink-0 flex-col border-r border-line/80 py-6 pr-4 pl-4 lg:flex">
          <nav className="flex flex-1 flex-col gap-1">
            {navItems.map((item) => {
              const on = pathname === item.to;
              const done = item.lesson ? completed.includes(item.lesson) : false;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex h-11 items-center gap-3 rounded-[12px] px-3 text-sm transition-colors duration-150",
                    on
                      ? "bg-azulejo text-paper"
                      : "text-ink hover:bg-azulejo-soft",
                  )}
                >
                  <item.icon className="size-4 shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {done && !on ? (
                    <span className="size-1.5 rounded-full bg-good" />
                  ) : null}
                </Link>
              );
            })}
            <Link
              to={practiceItem.to}
              className={cn(
                "mt-3 flex h-11 items-center gap-3 rounded-[12px] px-3 text-sm transition-colors duration-150",
                pathname === "/praktika"
                  ? "bg-azulejo text-paper"
                  : "text-ink hover:bg-azulejo-soft",
              )}
            >
              <BookOpenCheck className="size-4" />
              Практика
            </Link>
          </nav>
          <p className="px-3 text-xs leading-relaxed text-subtle">
            Нажмите на любое португальское слово — услышите произношение.
          </p>
        </aside>

        <main
          id="content"
          className="min-w-0 flex-1 px-4 pb-28 pt-6 sm:px-6 lg:px-8 lg:pb-12"
        >
          {children}
        </main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden">
        <ul className="mx-auto grid max-w-lg grid-cols-5">
          {mobileTabs.map((item) => {
            const Icon = item.icon;
            const on = isActivePath(pathname, item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex h-14 flex-col items-center justify-center gap-0.5 text-[11px]",
                    on ? "text-azulejo" : "text-muted",
                  )}
                >
                  <Icon className="size-5" strokeWidth={on ? 2.2 : 1.8} />
                  {item.short}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
