import {
  BookOpen,
  Hash,
  House,
  Languages,
  MessageCircle,
  Type,
} from "lucide-react";
import type { LessonId } from "@/lib/store";

export const navItems: {
  to: string;
  label: string;
  short: string;
  icon: typeof House;
  lesson?: LessonId;
  group?: "words";
}[] = [
  { to: "/", label: "Главная", short: "Дом", icon: House },
  { to: "/alfabeto", label: "Алфавит", short: "АБВ", icon: Type, lesson: "alfabeto" },
  { to: "/leitura", label: "Чтение", short: "Чтение", icon: BookOpen, lesson: "leitura" },
  { to: "/frases", label: "Фразы", short: "Фразы", icon: MessageCircle, lesson: "frases", group: "words" },
  { to: "/numeros", label: "Числа", short: "Числа", icon: Hash, lesson: "numeros", group: "words" },
  { to: "/gramatica", label: "Грамматика", short: "Грам.", icon: Languages, lesson: "gramatica", group: "words" },
];

export const practiceItem = {
  to: "/praktika",
  label: "Практика",
  short: "Тест",
  icon: BookOpen,
  lesson: "praktika" as LessonId,
};
