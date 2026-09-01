import { createFileRoute } from "@tanstack/react-router";
import { MarkDone } from "@/components/mark-done";
import { WordChip } from "@/components/word-chip";
import { WordsSubnav } from "@/components/words-subnav";
import { numberRules, numbers, tens } from "@/lib/data/numbers";

export const Route = createFileRoute("/numeros")({ component: NumerosPage });

function NumerosPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <WordsSubnav current="/numeros" />
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azulejo">
        04 · Números
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Числа</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Выучите 0–20 наизусть. Дальше всё собирается: vinte e três, trinta e cinco.
      </p>

      <h2 className="mt-8 font-display text-2xl font-semibold tracking-tight">0–20</h2>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {numbers.map((n) => (
          <WordChip key={n.word} item={n} />
        ))}
      </div>

      <h2 className="mt-10 font-display text-2xl font-semibold tracking-tight">
        Десятки и сотни
      </h2>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {tens.map((n) => (
          <WordChip key={n.word} item={n} />
        ))}
      </div>

      <section className="mt-10 rounded-[20px] bg-paper p-5 shadow-[var(--shadow-border)]">
        <h2 className="font-display text-xl font-semibold tracking-tight">Как собирать</h2>
        <ul className="mt-3 space-y-2">
          {numberRules.map((rule) => (
            <li key={rule} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-azulejo" />
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-10">
        <MarkDone id="numeros" />
      </div>
    </div>
  );
}
