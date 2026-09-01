import { Volume2 } from "lucide-react";
import { speakPortuguese } from "@/lib/speech";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

export function SpeakButton({
  text,
  slow,
  className,
  label,
}: {
  text: string;
  slow?: boolean;
  className?: string;
  label?: string;
}) {
  const dialect = useProgress((s) => s.dialect);
  const bumpHeard = useProgress((s) => s.bumpHeard);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        speakPortuguese(text, dialect, slow);
        bumpHeard();
      }}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-[8px] text-azulejo transition-colors duration-150 hover:bg-azulejo-soft",
        className,
      )}
      aria-label={label ?? `Произнести ${text}`}
    >
      <Volume2 className="size-4" strokeWidth={2} />
    </button>
  );
}

export function usePronunciation() {
  const dialect = useProgress((s) => s.dialect);
  return function pick<T extends { br: { ipa: string; ru: string }; pt?: { ipa: string; ru: string } }>(
    item: T,
  ) {
    return dialect === "pt" && item.pt ? item.pt : item.br;
  };
}
