import { createFileRoute } from "@tanstack/react-router";
import { MarkDone } from "@/components/mark-done";
import { WordChip } from "@/components/word-chip";
import { WordsSubnav } from "@/components/words-subnav";
import { phraseGroups } from "@/lib/data/phrases";

export const Route = createFileRoute("/frases")({ component: FrasesPage });

function FrasesPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <WordsSubnav current="/frases" />
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azulejo">
        03 · Frases
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
        Первые фразы
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Нажмите карточку — услышите фразу. Obrigado говорит мужчина, obrigada —
        женщина: это про говорящего, не про собеседника.
      </p>

      <div className="mt-8 space-y-10">
        {phraseGroups.map((group) => (
          <section key={group.id}>
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              {group.title}
            </h2>
            <div className="mt-4 grid gap-2">
              {group.items.map((item) => (
                <WordChip key={item.word} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10">
        <MarkDone id="frases" />
      </div>
    </div>
  );
}
