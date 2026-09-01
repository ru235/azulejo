import { createFileRoute } from "@tanstack/react-router";
import { MarkDone } from "@/components/mark-done";
import { WordChip } from "@/components/word-chip";
import { readingRules } from "@/lib/data/reading";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/leitura")({ component: LeituraPage });

function LeituraPage() {
  const dialect = useProgress((s) => s.dialect);

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azulejo">
        02 · Leitura
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
        Правила чтения
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Португальский читается регулярнее английского, но не «как пишется» по-русски.
        Ниже — то, без чего нельзя открыть первое предложение. Нажимайте примеры,
        чтобы услышать.
      </p>

      <nav className="mt-6 flex gap-2 overflow-x-auto pb-1">
        {readingRules.map((rule) => (
          <a
            key={rule.id}
            href={`#${rule.id}`}
            className="shrink-0 rounded-full bg-paper px-3 py-2 text-xs font-medium text-ink shadow-[var(--shadow-border)]"
          >
            {rule.title}
          </a>
        ))}
      </nav>

      <div className="mt-8 space-y-10">
        {readingRules.map((rule, i) => (
          <section key={rule.id} id={rule.id} className="scroll-mt-24">
            <p className="text-xs font-semibold tabular-nums text-subtle">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold tracking-tight">
              {rule.title}
            </h2>
            <p className="mt-2 text-muted">{rule.lead}</p>
            <ul className="mt-4 space-y-2">
              {rule.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-azulejo" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {rule.ptNote && dialect === "pt" ? (
              <p className="mt-4 rounded-[12px] bg-azulejo-soft px-4 py-3 text-sm leading-relaxed text-azulejo-deep">
                {rule.ptNote}
              </p>
            ) : rule.ptNote ? (
              <p className="mt-4 text-sm leading-relaxed text-subtle">{rule.ptNote}</p>
            ) : null}
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {rule.examples.map((ex) => (
                <WordChip key={ex.word + ex.meaning} item={ex} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10">
        <MarkDone id="leitura" />
      </div>
    </div>
  );
}
