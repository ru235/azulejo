import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function WordsSubnav({ current }: { current: string }) {
  const items = [
    { to: "/frases", label: "Фразы" },
    { to: "/numeros", label: "Числа" },
    { to: "/gramatica", label: "Грамматика" },
  ] as const;

  return (
    <div className="mb-6 flex gap-1 rounded-full bg-paper p-1 shadow-[var(--shadow-border)] lg:hidden">
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={cn(
            "flex h-9 flex-1 items-center justify-center rounded-full text-sm font-medium",
            current === item.to ? "bg-azulejo text-paper" : "text-muted",
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
