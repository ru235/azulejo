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
      heard: 0,
      bumpHeard: () => set({ heard: get().heard + 1 }),
    }),
    { name: "azulejo-progress" },
  ),
);
