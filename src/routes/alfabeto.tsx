import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MarkDone } from "@/components/mark-done";
import { SpeakButton, usePronunciation } from "@/components/speak-button";
import { alphabet } from "@/lib/data/alphabet";
import { speakPortuguese } from "@/lib/speech";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/alfabeto")({ component: AlfabetoPage });

function AlfabetoPage() {
  const [open, setOpen] = useState<string>("A");
  const dialect = useProgress((s) => s.dialect);
  const bumpHeard = useProgress((s) => s.bumpHeard);
  const pick = usePronunciation();

  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azulejo">
        01 · Letras
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Алфавит</h1>
      <p className="mt-3 max-w-2xl text-muted">
        26 букв латиницы плюс ç. K, W и Y встречаются только в заимствованиях.
        Нажмите букву — услышите название и примеры.
      </p>

      <div className="mt-6 grid grid-cols-6 gap-2 sm:grid-cols-9">
        {alphabet.map((letter) => {
          const active = open === letter.char;
          return (
            <button
              key={letter.char}
              type="button"
              onClick={() => {
                setOpen(letter.char);
                speakPortuguese(letter.char === "Ç" ? "cê cedilha" : letter.name, dialect);
                bumpHeard();
              }}
              className={cn(
                "flex h-12 items-center justify-center rounded-[12px] font-display text-xl font-semibold transition-colors duration-150",
                active
                  ? "bg-azulejo text-paper"
                  : letter.rare
                    ? "bg-paper text-subtle shadow-[var(--shadow-border)]"
                    : "bg-paper text-ink shadow-[var(--shadow-border)] hover:bg-azulejo-soft",
              )}
              aria-pressed={active}
            >
              {letter.char}
            </button>
          );
        })}
      </div>

      {alphabet.map((letter) => {
        if (letter.char !== open) return null;
        return (
          <article
            key={letter.char}
            className="mt-6 rounded-[20px] bg-paper p-5 shadow-[var(--shadow-border)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-5xl font-semibold leading-none tracking-tight">
                  {letter.char}
                  <span className="ml-2 text-3xl text-muted">{letter.char.toLowerCase()}</span>
                </p>
                <p className="mt-3 font-display text-lg text-azulejo">
                  {letter.name}{" "}
                  <span className="text-subtle">{letter.nameIpa}</span>
                </p>
              </div>
              <SpeakButton text={letter.char === "Ç" ? "cedilha" : letter.name} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{letter.note}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {letter.examples.map((ex) => {
                const pron = pick(ex);
                return (
                  <li key={ex.word}>
                    <button
                      type="button"
                      onClick={() => {
                        speakPortuguese(ex.word, dialect);
                        bumpHeard();
                      }}
                      className="flex w-full items-center justify-between rounded-[12px] bg-bg px-3 py-3 text-left"
                    >
                      <span>
                        <span className="block font-display text-base">{ex.word}</span>
                        <span className="text-xs text-muted">{ex.meaning}</span>
                      </span>
                      <span className="text-right font-display text-sm text-azulejo">
                        {pron.ru}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}

      <div className="mt-8">
        <MarkDone id="alfabeto" />
      </div>
    </div>
  );
}
