import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, Check, RotateCcw, Trophy, Volume2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Quiz, QuizQuestion } from "@/lib/data/quiz";
import { quizzes } from "@/lib/data/quiz";
import { speakPortuguese } from "@/lib/speech";
import { useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

/**
 * Deterministic shuffle: same question always shows the same option order on
 * both server and client (no hydration mismatch), but answers are spread
 * uniformly — fixes the 62× answer=1 skew in the raw 72-question corpus.
 */
function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function mulberry32(a: number): () => number {
  return () => {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffledQuestion(q: QuizQuestion, quizId: string): { options: string[]; answer: number } {
  const seed = hashString(`${quizId}:${q.id}`);
  const rng = mulberry32(seed);
  const items = q.options.map((text, orig) => ({ text, orig }));
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = items[i]!;
    items[i] = items[j]!;
    items[j] = tmp!;
  }
  const options = items.map((item) => item.text);
  const answer = items.findIndex((item) => item.orig === q.answer);
  return { options, answer };
}

export const Route = createFileRoute("/praktika")({ component: PraktikaPage });

function PraktikaPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = quizzes.find((q) => q.id === activeId);

  return active ? (
    <QuizRunner quiz={active} onExit={() => setActiveId(null)} />
  ) : (
    <QuizPicker onPick={setActiveId} />
  );
}

function QuizPicker({ onPick }: { onPick: (id: string) => void }) {
  const quizScores = useProgress((s) => s.quizScores);
  const totalQuestions = quizzes.reduce((sum, q) => sum + q.questions.length, 0);
  const passed = quizzes.filter((q) => (quizScores[q.id] ?? 0) >= 8).length;

  return (
    <div className="mx-auto max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azulejo">
        06 · Prática
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
        Проверьте себя
      </h1>
      <p className="mt-3 text-muted">
        {quizzes.length} теста по {quizzes[0].questions.length} вопросов. Восемь
        правильных — тест пройден.
      </p>

      <div className="mt-6 flex items-center gap-3 rounded-[16px] bg-paper px-4 py-3 shadow-[var(--shadow-border)]">
        <span className="flex size-10 items-center justify-center rounded-full bg-azulejo-soft text-azulejo">
          <Trophy className="size-5" />
        </span>
        <div>
          <p className="text-sm font-medium">
            Пройдено {passed} из {quizzes.length}
          </p>
          <p className="text-xs text-subtle">Всего {totalQuestions} вопросов</p>
        </div>
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {quizzes.map((quiz) => {
          const best = quizScores[quiz.id] ?? 0;
          const total = quiz.questions.length;
          const done = best >= 8;
          return (
            <li key={quiz.id}>
              <button
                type="button"
                onClick={() => onPick(quiz.id)}
                className="flex h-full w-full flex-col items-start gap-2 rounded-[20px] bg-paper p-4 text-left shadow-[var(--shadow-border)] transition-[transform,box-shadow] duration-150 hover:shadow-[0_0_0_1px_rgba(30,77,140,0.16),0_10px_24px_-14px_rgba(30,77,140,0.4)] active:scale-[0.99]"
              >
                <span className="flex w-full items-center gap-2">
                  <span className="font-display text-lg font-semibold tracking-tight">
                    {quiz.title}
                  </span>
                  {done ? (
                    <span className="rounded-full bg-good-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-good">
                      пройден
                    </span>
                  ) : null}
                  <span className="ml-auto text-xs tabular-nums text-subtle">
                    {best ? `${best}/${total}` : `${total} вопр.`}
                  </span>
                </span>
                <span className="text-sm text-muted">{quiz.lead}</span>
                <span className="mt-1 h-1 w-full overflow-hidden rounded-full bg-line">
                  <span
                    className={cn(
                      "block h-full transition-[width] duration-300",
                      done ? "bg-good" : "bg-azulejo",
                    )}
                    style={{ width: `${(best / total) * 100}%` }}
                  />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function QuizRunner({ quiz, onExit }: { quiz: Quiz; onExit: () => void }) {
  const dialect = useProgress((s) => s.dialect);
  const bumpHeard = useProgress((s) => s.bumpHeard);
  const setQuizScore = useProgress((s) => s.setQuizScore);
  const setQuizBest = useProgress((s) => s.setQuizBest);
  const markComplete = useProgress((s) => s.markComplete);
  const previousBest = useProgress((s) => s.quizScores[quiz.id] ?? 0);

  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const total = quiz.questions.length;
  const q = quiz.questions[index];
  const shuffled = useMemo(
    () => (q ? shuffledQuestion(q, quiz.id) : null),
    // q.id is stable; quiz.id disambiguates across tests
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [q?.id, quiz.id],
  );

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  const choose = (i: number) => {
    if (picked !== null || !q || !shuffled) return;
    setPicked(i);
    if (i === shuffled.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (!q) return;
    if (index + 1 >= total) {
      setQuizScore(quiz.id, score);
      setQuizBest(score); // keeps the home-page "Тест" stat working
      if (score >= 8) markComplete("praktika");
      setDone(true);
      return;
    }
    setIndex((n) => n + 1);
    setPicked(null);
  };

  if (!q) return null;

  if (done) {
    return (
      <div className="mx-auto max-w-lg">
        <BackLink onClick={onExit} />
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
          {score >= 8 ? "Тест пройден" : "Готово"}
        </h1>
        <div className="mt-6 rounded-[20px] bg-paper p-6 shadow-[var(--shadow-border)]">
          <p className="text-sm text-muted">{quiz.title} — правильных ответов</p>
          <p className="mt-1 font-display text-5xl font-semibold tabular-nums tracking-tight">
            {score}
            <span className="text-2xl text-muted">/{total}</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {score >= 10
              ? "Отлично. Тема держится — берите следующий тест."
              : score >= 8
                ? "Зачёт. Слабые места стоит пробежать глазами ещё раз."
                : `Пока мало. Откройте «${quiz.reviewLabel}» и пройдите тест снова.`}
          </p>
          {previousBest > score ? (
            <p className="mt-2 text-xs text-subtle">
              Лучший результат: {previousBest}/{total}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={restart}>
              <RotateCcw className="size-4" />
              Ещё раз
            </Button>
            {score < 8 ? (
              <Button asChild variant="secondary">
                <Link to={quiz.reviewHref}>{quiz.reviewLabel}</Link>
              </Button>
            ) : null}
            <Button variant="ghost" onClick={onExit}>
              К списку тестов
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg">
      <BackLink onClick={onExit} />
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">
        {quiz.title}
      </h1>
      <p className="mt-3 text-muted">
        {index + 1} из {total}.{" "}
        {q.word ? "Сначала послушайте слово, потом выберите ответ." : "Выберите ответ."}
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
        <h2 className={cn("text-base font-medium leading-snug", q.word && "mt-4")}>
          {q.prompt}
        </h2>

        <ul className="mt-4 space-y-2">
          {(shuffled?.options ?? q.options).map((opt, i) => {
            const isPicked = picked === i;
            const isRight = shuffled ? i === shuffled.answer : i === q.answer;
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
                  {show && isRight ? <Check className="size-4 shrink-0" /> : null}
                  {show && isPicked && !isRight ? <X className="size-4 shrink-0" /> : null}
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

function BackLink({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-azulejo"
    >
      <ArrowLeft className="size-3.5" />
      Все тесты
    </button>
  );
}
