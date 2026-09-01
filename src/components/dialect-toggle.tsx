import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

export function DialectToggle({ className }: { className?: string }) {
  const dialect = useProgress((s) => s.dialect);
  const setDialect = useProgress((s) => s.setDialect);

  return (
    <div
      className={cn(
        "inline-flex h-9 items-center rounded-full bg-paper p-0.5 shadow-[var(--shadow-border)]",
        className,
      )}
      role="radiogroup"
      aria-label="Диалект"
    >
      {(
        [
          { id: "br", label: "BR" },
          { id: "pt", label: "PT" },
        ] as const
      ).map((opt) => (
        <button
          key={opt.id}
          type="button"
          role="radio"
          aria-checked={dialect === opt.id}
          onClick={() => setDialect(opt.id)}
          className={cn(
            "h-8 min-w-10 rounded-full px-2.5 text-xs font-semibold tracking-wide transition-colors duration-150",
            dialect === opt.id
              ? "bg-azulejo text-paper"
              : "text-muted hover:text-ink",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
