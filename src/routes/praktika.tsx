import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, RotateCcw, Volume2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quizQuestions } from "@/lib/data/quiz";
import { speakPortuguese } from "@/lib/speech";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/praktika")({ component: PraktikaPage });

function PraktikaPage() {
  const dialect = useProgress((s) => s.dialect);
  const bumpHeard = useProgress((s) => s.bumpHeard);
  const setQuizBest = useProgress((s) => s.setQuizBest);
  const markComplete = useProgress((s) => s.markComplete);
  const quizBest = useProgress((s) => s.quizBest);

  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = quizQuestions[index];
  const total = quizQuestions.length;

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  const choose = (i: number) => {
    if (picked !== null || !q) return;
    setPicked(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (!q) return;
    if (index + 1 >= total) {
      setQuizBest(score);
      if (score >= 8) markComplete("praktika");
      setDone(true);
      return;
    }
    setIndex((n) => n + 1);
    setPicked(null);
  };

  const finalScore = useMemo(() => score, [score]);

  if (!q) return null;

  if (done) {
    return (
      <div className="mx-auto max-w-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azulejo">
          06 · Prática
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
          Готово
        </h1>
        <div className="mt-6 rounded-[20px] bg-paper p-6 shadow-[var(--shadow-border)]">
          <p className="text-sm text-muted">Правильных ответов</p>
          <p className="mt-1 font-display text-5xl font-semibold tabular-nums tracking-tight">
            {finalScore}
            <span className="text-2xl text-muted">/{total}</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {finalScore >= 10
              ? "Отлично. Правила уже держатся — можно переходить к фразам и слушать живую речь."
              : finalScore >= 7
                ? "Хорошая база. Вернитесь к разделам, где ошиблись, и пройдите ещё раз."
                : "Нормально для первого раза. Откройте «Чтение» и пройдите тест снова."}
          </p>
          {quizBest > finalScore ? (
            <p className="mt-2 text-xs text-subtle">Лучший результат: {quizBest}/12</p>
          ) : null}
          <Button className="mt-6" onClick={restart}>
            <RotateCcw className="size-4" />
            Ещё раз
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azulejo">
        06 · Prática
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
        Проверьте чтение
      </h1>
      <p className="mt-3 text-muted">
        {index + 1} из {total}. Сначала послушайте слово, потом выберите ответ.
      </p>

      <div className="mt-4 h-1 overflow-hidden rounded-full bg-line">
        <div
          className="h-full bg-azulejo transition-[width] duration-200"
          style={{ width: `${((index + (picked !== null ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <article className="mt-6 rounded-[20px] bg-paper p-5 shadow-[var(--shadow-border)] sm:p-6">
        {q.word ? (
          <button
            type="button"
            onClick={() => {
              speakPortuguese(q.word!, dialect);
              bumpHeard();
            }}
            className="flex items-center gap-3"
          >
            <span className="flex size-11 items-center justify-center rounded-[12px] bg-azulejo-soft text-azulejo">
              <Volume2 className="size-5" />
            </span>
            <span className="font-display text-3xl font-semibold tracking-tight">
              {q.word}
            </span>
          </button>
        ) : null}
        <h2 className="mt-4 text-base font-medium leading-snug">{q.prompt}</h2>

        <ul className="mt-4 space-y-2">
          {q.options.map((opt, i) => {
            const isPicked = picked === i;
            const isRight = i === q.answer;
            const show = picked !== null;
            return (
              <li key={opt}>
                <button
                  type="button"
                  onClick={() => choose(i)}
                  disabled={picked !== null}
                  className={cn(
                    "flex w-full items-center justify-between rounded-[12px] px-4 py-3 text-left text-sm transition-colors duration-150",
                    !show && "bg-bg hover:bg-azulejo-soft",
                    show && isRight && "bg-good-soft text-good",
                    show && isPicked && !isRight && "bg-bad-soft text-bad",
                    show && !isPicked && !isRight && "bg-bg text-subtle",
                  )}
                >
                  <span>{opt}</span>
                  {show && isRight ? <Check className="size-4" /> : null}
                  {show && isPicked && !isRight ? <X className="size-4" /> : null}
                </button>
              </li>
            );
          })}
        </ul>

        {picked !== null ? (
          <div className="mt-4">
            <p className="text-sm leading-relaxed text-muted">{q.explain}</p>
            <Button className="mt-4" onClick={next}>
              {index + 1 >= total ? "Результат" : "Дальше"}
            </Button>
          </div>
        ) : null}
      </article>
    </div>
  );
}
