import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Hash,
  Languages,
  MessageCircle,
  Type,
  Volume2,
} from "lucide-react";
import { AzulejoMark } from "@/components/azulejo-mark";
import { Button } from "@/components/ui/button";
import { dialectNotes } from "@/lib/data/reading";
import { LESSON_IDS, useProgress } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

const lessons = [
  {
    to: "/alfabeto",
    id: "alfabeto" as const,
    title: "Алфавит",
    text: "26 букв, ç и как их называют.",
    icon: Type,
  },
  {
    to: "/leitura",
    id: "leitura" as const,
    title: "Правила чтения",
    text: "Носовые, диграфы, ударение, r и x.",
    icon: BookOpen,
  },
  {
    to: "/frases",
    id: "frases" as const,
    title: "Фразы",
    text: "Приветствия, вежливость, выживание.",
    icon: MessageCircle,
  },
  {
    to: "/numeros",
    id: "numeros" as const,
    title: "Числа",
    text: "От нуля до тысячи и как их собирать.",
    icon: Hash,
  },
  {
    to: "/gramatica",
    id: "gramatica" as const,
    title: "Грамматика",
    text: "Род, артикли, ser / estar, глаголы -ar.",
    icon: Languages,
  },
  {
    to: "/praktika",
    id: "praktika" as const,
    title: "Практика",
    text: "Короткий тест на правила чтения.",
    icon: Volume2,
  },
];

function Home() {
  const completed = useProgress((s) => s.completed);
  const dialect = useProgress((s) => s.dialect);
  const quizBest = useProgress((s) => s.quizBest);
  const heard = useProgress((s) => s.heard);
  const doneCount = LESSON_IDS.filter((id) => completed.includes(id)).length;
  const notes = dialectNotes[dialect];

  return (
    <div className="mx-auto max-w-3xl">
      <section className="relative overflow-hidden rounded-[28px] bg-azulejo px-6 py-8 text-paper sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-6 -top-8 opacity-20">
          <AzulejoMark className="size-40 text-paper" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-azulejo-soft">
          Primeiro passo
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Olá. Начните читать по-португальски.
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-azulejo-soft">
          Правила чтения, алфавит и первые слова — с русской подсказкой и живым
          произношением. Переключатель BR / PT сверху.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg" variant="secondary">
            <Link to="/leitura">
              Правила чтения
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="text-paper hover:bg-white/10 hover:text-paper"
          >
            <Link to="/alfabeto">Алфавит</Link>
          </Button>
        </div>
      </section>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <Stat label="Разделы" value={`${doneCount}/${LESSON_IDS.length}`} />
        <Stat label="Прослушано" value={`${heard}`} />
        <Stat
          label="Тест"
          value={quizBest ? `${quizBest}/12` : "—"}
        />
      </div>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Разделы</h2>
        <p className="mt-1 text-sm text-muted">
          Идите по порядку или сразу к чтению — это главное на старте.
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {lessons.map((lesson) => {
            const Icon = lesson.icon;
            const done = completed.includes(lesson.id);
            return (
              <li key={lesson.to}>
                <Link
                  to={lesson.to}
                  className="flex h-full gap-4 rounded-[20px] bg-paper p-4 shadow-[var(--shadow-border)] transition-[transform,box-shadow] duration-150 hover:shadow-[0_0_0_1px_rgba(30,77,140,0.16),0_10px_24px_-14px_rgba(30,77,140,0.4)] active:scale-[0.99]"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-azulejo-soft text-azulejo">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-2">
                      <span className="font-display text-lg font-semibold tracking-tight">
                        {lesson.title}
                      </span>
                      {done ? (
                        <span className="rounded-full bg-good-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-good">
                          готово
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{lesson.text}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-10 rounded-[20px] bg-paper p-5 shadow-[var(--shadow-border)] sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-azulejo">
          Сейчас выбран {dialect === "br" ? "бразильский" : "европейский"}
        </p>
        <h2 className="mt-2 font-display text-xl font-semibold tracking-tight">
          {notes.title}
        </h2>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
          {notes.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-azulejo" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[16px] bg-paper px-3 py-3 shadow-[var(--shadow-border)] sm:px-4">
      <p className="text-[11px] font-medium uppercase tracking-wide text-subtle">{label}</p>
      <p className={cn("mt-1 font-display text-2xl font-semibold tabular-nums tracking-tight")}>
        {value}
      </p>
    </div>
  );
}
