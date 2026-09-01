export type GrammarSection = {
  id: string;
  title: string;
  lead: string;
  points: string[];
  rows?: { left: string; right: string }[];
};

export const grammarSections: GrammarSection[] = [
  {
    id: "gender",
    title: "Род и артикли",
    lead: "У каждого существительного род. Артикль — самый надёжный ориентир.",
    points: [
      "Мужской: o livro, o café, o pão. Женский: a casa, a água, a noite.",
      "Множественное: os livros, as casas.",
      "Неопределённый: um, uma, uns, umas.",
      "Окончание -o чаще мужской, -a чаще женский. Но есть исключения: o dia, o mapa, a mão, a tribo.",
      "Артикль почти всегда нужен. Не говорите просто «casa» в значении «дом» — o/a casa.",
    ],
    rows: [
      { left: "o / a", right: "определённый ед. ч." },
      { left: "os / as", right: "определённый мн. ч." },
      { left: "um / uma", right: "неопределённый ед. ч." },
      { left: "uns / umas", right: "неопределённый мн. ч." },
    ],
  },
  {
    id: "pronouns",
    title: "Личные местоимения",
    lead: "В Бразилии você вытеснил tu в повседневной речи. Глагол при você — как при ele/ela.",
    points: [
      "Eu — я. Você — вы/ты (BR, вежливо и обычно). Ele / ela — он / она.",
      "Nós — мы. Vocês — вы (мн.). Eles / elas — они.",
      "Tu жив в Португалии, на севере Бразилии и в песнях. Новичкам в BR достаточно você.",
      "Подлежащее часто опускают, если лицо ясно из глагола: Falo português.",
    ],
    rows: [
      { left: "eu", right: "я" },
      { left: "tu", right: "ты (PT, частично BR)" },
      { left: "você", right: "ты / вы (ед.)" },
      { left: "ele / ela", right: "он / она" },
      { left: "nós", right: "мы" },
      { left: "vocês", right: "вы (мн.)" },
      { left: "eles / elas", right: "они" },
    ],
  },
  {
    id: "ser-estar",
    title: "Ser и estar",
    lead: "Оба значат «быть». Ser — суть и постоянное. Estar — состояние и место.",
    points: [
      "Ser: кем являюсь, из чего, чьё, когда по расписанию. Eu sou russo. São Paulo é grande. São duas horas.",
      "Estar: как себя чувствую, где нахожусь, временный признак. Estou bem. O café está quente. Estou em Lisboa.",
      "Ошибка «я есть» калькой с русского не проходит: не Eu é, а Eu sou / Eu estou.",
    ],
    rows: [
      { left: "eu sou / estou", right: "я есть" },
      { left: "você é / está", right: "ты есть" },
      { left: "ele é / está", right: "он есть" },
      { left: "nós somos / estamos", right: "мы есть" },
      { left: "vocês são / estão", right: "вы есть" },
      { left: "eles são / estão", right: "они есть" },
    ],
  },
  {
    id: "verbs",
    title: "Настоящее время: глаголы на -ar",
    lead: "Большинство глаголов оканчивается на -ar. Выучите одну таблицу — откроется falar, gostar, morar, trabalhar.",
    points: [
      "Основа + окончания: -o, -a, -a, -amos, -am (для você/ele и vocês/eles совпадают).",
      "Falar: eu falo, você fala, ele fala, nós falamos, vocês falam.",
      "Gostar de — нравиться: Eu gosto de café.",
      "Отрицание: não перед глаголом. Eu não falo inglês.",
      "Вопрос часто только интонацией: Você fala português?",
    ],
    rows: [
      { left: "eu falo", right: "я говорю" },
      { left: "você / ele fala", right: "ты / он говорит" },
      { left: "nós falamos", right: "мы говорим" },
      { left: "vocês / eles falam", right: "вы / они говорят" },
    ],
  },
];
