import { Volume2 } from "lucide-react";
import { speakPortuguese } from "@/lib/speech";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";
import type { Example } from "@/lib/data/alphabet";
import { usePronunciation } from "@/components/speak-button";

export function WordChip({
  item,
  className,
}: {
  item: Example & { note?: string };
  className?: string;
}) {
  const dialect = useProgress((s) => s.dialect);
  const bumpHeard = useProgress((s) => s.bumpHeard);
  const pick = usePronunciation();
  const pron = pick(item);

  return (
    <button
      type="button"
      onClick={() => {
        const speakWord = item.word.split(/[…?]/)[0]?.trim() || item.word;
        speakPortuguese(speakWord, dialect);
        bumpHeard();
      }}
      className={cn(
        "group flex w-full items-start gap-3 rounded-[16px] bg-paper p-4 text-left shadow-[var(--shadow-border)] transition-[transform,box-shadow] duration-150 hover:shadow-[0_0_0_1px_rgba(30,77,140,0.18),0_8px_20px_-12px_rgba(30,77,140,0.35)] active:scale-[0.99]",
        className,
      )}
    >
      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[8px] bg-azulejo-soft text-azulejo">
        <Volume2 className="size-4" strokeWidth={2} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-lg leading-snug tracking-tight text-ink">
          {item.word}
        </span>
        <span className="mt-0.5 block text-sm text-muted">{item.meaning}</span>
        <span className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 font-display text-sm text-azulejo">
          <span>{pron.ru}</span>
          <span className="text-subtle">{pron.ipa}</span>
        </span>
        {item.note ? (
          <span className="mt-2 block text-xs leading-relaxed text-subtle">{item.note}</span>
        ) : null}
      </span>
    </button>
  );
}
