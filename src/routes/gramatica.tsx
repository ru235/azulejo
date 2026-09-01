import { createFileRoute } from "@tanstack/react-router";
import { MarkDone } from "@/components/mark-done";
import { WordsSubnav } from "@/components/words-subnav";
import { grammarSections } from "@/lib/data/grammar";

export const Route = createFileRoute("/gramatica")({ component: GramaticaPage });

function GramaticaPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <WordsSubnav current="/gramatica" />
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azulejo">
        05 · Gramática
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
        Грамматика на старт
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Четыре опоры, без которых фразы не собираются: род, местоимения, два «быть»
        и настоящее время глаголов на -ar.
      </p>

      <div className="mt-8 space-y-8">
        {grammarSections.map((section) => (
          <section
            key={section.id}
            className="rounded-[20px] bg-paper p-5 shadow-[var(--shadow-border)] sm:p-6"
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              {section.title}
            </h2>
            <p className="mt-2 text-sm text-muted">{section.lead}</p>
            <ul className="mt-4 space-y-2">
              {section.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-azulejo" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            {section.rows ? (
              <div className="mt-5 overflow-hidden rounded-[12px] border border-line">
                {section.rows.map((row) => (
                  <div
                    key={row.left}
                    className="grid grid-cols-2 gap-3 border-b border-line px-3 py-2.5 last:border-b-0"
                  >
                    <p className="font-display text-sm text-azulejo">{row.left}</p>
                    <p className="text-sm text-muted">{row.right}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </section>
        ))}
      </div>

      <div className="mt-10">
        <MarkDone id="gramatica" />
      </div>
    </div>
  );
}
