export type QuizQuestion = {
  id: string;
  prompt: string;
  word?: string;
  options: string[];
  answer: number;
  explain: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "ch",
    prompt: "Как читается ch в слове chave?",
    word: "chave",
    options: ["ч, как в «чай»", "ш, как в «шар»", "к + х", "чш"],
    answer: 1,
    explain: "ch в португальском всегда «ш»: chave, chuva, chá. Звука «ч» у этого диграфа нет.",
  },
  {
    id: "ao",
    prompt: "Как звучит окончание ão?",
    word: "não",
    options: ["ао, двумя слогами", "он, как в русском", "носовое «а̃у̃» в одном слоге", "ан"],
    answer: 2,
    explain: "ão — носовой дифтонг. Не разбивайте на «а-о» и не договаривайте твёрдое н.",
  },
  {
    id: "s-vowel",
    prompt: "Как читается s в слове casa?",
    word: "casa",
    options: ["с", "з", "ш", "ж"],
    answer: 1,
    explain: "Между гласными одно s звучит как «з». Для глухого «с» пишут ss: caça vs caça, isso.",
  },
  {
    id: "dia",
    prompt: "Как в Бразилии обычно произносят dia?",
    word: "dia",
    options: ["ди́а", "джи́а", "дья", "ти́а"],
    answer: 1,
    explain: "В BR d перед i даёт «дж». В Португалии остаётся «д»: ди́а.",
  },
  {
    id: "nh",
    prompt: "Диграф nh — это…",
    word: "vinho",
    options: ["н + х", "мягкое «нь»", "нг, как в English", "просто н"],
    answer: 1,
    explain: "nh = /ɲ/, как испанское ñ или русское «нь» в «коньяк»: vinho, amanhã.",
  },
  {
    id: "h",
    prompt: "Как читается h в hoje?",
    word: "hoje",
    options: ["как английское h", "как русское х", "никак, буква немая", "как г"],
    answer: 2,
    explain: "H само по себе всегда немое. Hoje = о́жи. Не путать с диграфами ch, lh, nh.",
  },
  {
    id: "stress",
    prompt: "Где ударение в слове falar (без знака на письме)?",
    word: "falar",
    options: ["фа́лар", "фала́р", "фáлар на первом", "оба слога равны"],
    answer: 1,
    explain: "Слова на -r ударны на последнем слоге. Поэтому falar, beber, abrir — ударение в конце.",
  },
  {
    id: "c-e",
    prompt: "Как читается c в cidade?",
    word: "cidade",
    options: ["к", "ц", "с", "ч"],
    answer: 2,
    explain: "c перед e и i — «с», не «ц» и не «к». Cidade, centro, cinema.",
  },
  {
    id: "l-br",
    prompt: "Как в Бразилии звучит конечный l в Brasil?",
    word: "Brasil",
    options: ["твёрдое ль", "у, как в «пау»", "й", "не читается"],
    answer: 1,
    explain: "В BR l в конце слога вокализируется: Brasil ≈ брази́у, legal ≈ лега́у.",
  },
  {
    id: "j",
    prompt: "Буква j всегда читается как…",
    word: "janela",
    options: ["й", "дж", "ж", "х"],
    answer: 2,
    explain: "j = /ʒ/, русское «ж»: já, janela, hoje. Никогда не «й».",
  },
  {
    id: "voce",
    prompt: "Знак в você означает…",
    word: "você",
    options: ["носовой звук", "ударение и закрытое e", "что слово английское", "мягкость с"],
    answer: 1,
    explain: "Циркумфлекс ê — ударение + закрытый e. Без знака ударение ушло бы на vo- по общему правилу.",
  },
  {
    id: "ss",
    prompt: "Зачем в isso две s?",
    word: "isso",
    options: ["чтобы звучало как «з»", "чтобы звучало как глухое «с»", "это опечатка", "для долготы"],
    answer: 1,
    explain: "Между гласными одно s = «з». Чтобы сохранить «с», пишут ss.",
  },
];
