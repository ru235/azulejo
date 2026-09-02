import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Dialect } from "@/lib/speech";

export const LESSON_IDS = [
  "alfabeto",
  "leitura",
  "frases",
  "numeros",
  "gramatica",
  "praktika",
] as const;

export type LessonId = (typeof LESSON_IDS)[number];

interface ProgressState {
  dialect: Dialect;
  setDialect: (dialect: Dialect) => void;
  completed: LessonId[];
  markComplete: (id: LessonId) => void;
  quizBest: number;
  setQuizBest: (score: number) => void;
  /** Best score per test id (see lib/data/quiz). */
  quizScores: Record<string, number>;
  setQuizScore: (quizId: string, score: number) => void;
  heard: number;
  bumpHeard: () => void;
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      dialect: "br",
      setDialect: (dialect) => set({ dialect }),
      completed: [],
      markComplete: (id) => {
        const current = get().completed;
        if (current.includes(id)) return;
        set({ completed: [...current, id] });
      },
      quizBest: 0,
      setQuizBest: (score) => {
        if (score > get().quizBest) set({ quizBest: score });
      },
      quizScores: {},
      setQuizScore: (quizId, score) => {
        const scores = get().quizScores;
        if ((scores[quizId] ?? 0) >= score) return;
        set({ quizScores: { ...scores, [quizId]: score } });
      },
      heard: 0,
      bumpHeard: () => set({ heard: get().heard + 1 }),
    }),
    {
      name: "azulejo-progress",
      version: 1,
      // v0 stored only `quizBest`; give existing visitors the new map instead
      // of `undefined`, which would crash every `quizScores[...]` read.
      migrate: (state) => ({
        quizScores: {},
        ...(state as Partial<ProgressState>),
      }) as ProgressState,
    },
  ),
);
