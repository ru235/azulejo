export type QuizQuestion = {
  id: string;
  prompt: string;
  /** Portuguese word to hear before answering — rendered as a speak button. */
  word?: string;
  options: string[];
  answer: number;
  explain: string;
};

export type Quiz = {
  id: string;
  title: string;
  /** One line shown on the card — what the test actually checks. */
  lead: string;
  /** Which lesson to revisit after a weak result. */
  reviewHref: string;
  reviewLabel: string;
  questions: QuizQuestion[];
};

/** Правила чтения — диграфы, носовые, ударение, s/x/r. */
const leitura: QuizQuestion[] = [
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
    explain: "Между гласными одно s звучит как «з». Для глухого «с» пишут ss: isso, passar.",
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

/** Алфавит — названия букв, ç, диграфы, редкие буквы. */
const alfabeto: QuizQuestion[] = [
  {
    id: "letters-count",
    prompt: "Сколько букв в современном португальском алфавите?",
    options: ["23", "24", "26", "33"],
    answer: 2,
    explain: "26 букв. K, W и Y вернули в алфавит орфографическим соглашением 1990 года — они живут в заимствованиях.",
  },
  {
    id: "c-cedilha",
    prompt: "Ç — это отдельная буква алфавита?",
    word: "coração",
    options: ["да, 27-я буква", "нет, это c с диакритикой", "да, но только в Бразилии", "нет, это диграф"],
    answer: 1,
    explain: "Ç (cê cedilha) — не отдельная буква, а вариант c. Всегда «с» и пишется только перед a, o, u: açúcar, coração.",
  },
  {
    id: "h-name",
    prompt: "Как называется буква H?",
    options: ["хá", "agá", "аche", "hê"],
    answer: 1,
    explain: "H называется «agá» /aˈɡa/, хотя сама буква немая: hotel = отэ́л.",
  },
  {
    id: "w-name",
    prompt: "Как называется буква W?",
    options: ["vê duplo", "dáblio", "u duplo", "wê"],
    answer: 1,
    explain: "В Бразилии W — «dáblio» (от английского double-u). В Португалии говорят и «vê duplo».",
  },
  {
    id: "lh",
    prompt: "Диграф lh в слове ilha — это…",
    word: "ilha",
    options: ["л + х", "мягкое «ль», как в «бульон»", "двойное л", "й"],
    answer: 1,
    explain: "lh = /ʎ/, как испанское ll или итальянское gli: ilha, filho, trabalho.",
  },
  {
    id: "q-u",
    prompt: "Читается ли u в слове que?",
    word: "que",
    options: ["да, «куэ»", "нет, «ки»", "да, но очень коротко", "зависит от диалекта"],
    answer: 1,
    explain: "В qu перед e и i буква u немая: que = «ки», aqui = «аки́». А в quatro u звучит: «куа́тру».",
  },
  {
    id: "g-e",
    prompt: "Как читается g в слове gente?",
    word: "gente",
    options: ["г", "ж", "дж", "х"],
    answer: 1,
    explain: "g перед e и i даёт «ж»: gente, gigante. Перед a, o, u — «г»: gato, gostar.",
  },
  {
    id: "rare",
    prompt: "В каких словах встречаются K, W, Y?",
    options: ["в старых словах", "только в заимствованиях и именах", "в глаголах", "нигде, они отменены"],
    answer: 1,
    explain: "Только в заимствованиях, единицах измерения и именах: kilo, web, yoga, Kafka, Byron.",
  },
  {
    id: "til",
    prompt: "Что обозначает тильда в ã и õ?",
    word: "irmã",
    options: ["долготу", "носовой звук", "ударение", "мягкость"],
    answer: 1,
    explain: "Тильда — знак носовости: irmã, mãe, põe. Ударение она задаёт заодно, но её задача — нос.",
  },
  {
    id: "x-name",
    prompt: "Как называется буква X?",
    word: "táxi",
    options: ["iques", "xis", "ex", "chis"],
    answer: 1,
    explain: "X называется «xis» /ʃis/. Читается по-разному: xícara «ш», táxi «кс», exame «з».",
  },
  {
    id: "z-final",
    prompt: "Как в Бразилии звучит z на конце слова, например в rapaz?",
    word: "rapaz",
    options: ["з", "с", "ц", "не читается"],
    answer: 1,
    explain: "На конце слова z оглушается до «с»: rapaz ≈ рапа́с, luz ≈ лу́с. В Португалии ближе к «ш».",
  },
  {
    id: "digraph-count",
    prompt: "Какая из групп — не диграф португальского языка?",
    options: ["ch", "lh", "nh", "sh"],
    answer: 3,
    explain: "sh в португальском не бывает — это английское написание. Диграфы: ch, lh, nh, rr, ss, qu, gu.",
  },
];

/** Числа — от нуля до тысячи, род, сборка десятков. */
const numeros: QuizQuestion[] = [
  {
    id: "seven",
    prompt: "Какое число — sete?",
    word: "sete",
    options: ["6", "7", "8", "9"],
    answer: 1,
    explain: "sete = 7. Не путайте с seis (6) и sete-cem на слух: в BR звучит «сэ́чи».",
  },
  {
    id: "gender-1",
    prompt: "Как сказать «одна вода» — uma água или um água?",
    word: "uma água",
    options: ["um água", "uma água", "оба варианта верны", "una água"],
    answer: 1,
    explain: "Água женского рода, значит uma água. Числительные 1 и 2 согласуются по роду: um café, uma água.",
  },
  {
    id: "gender-2",
    prompt: "«Две книги» (livro — м. р.) — это…",
    word: "dois livros",
    options: ["duas livros", "dois livros", "dois livras", "duo livros"],
    answer: 1,
    explain: "Livro мужского рода — dois livros. Для женского: duas casas, duas páginas.",
  },
  {
    id: "twenty-one",
    prompt: "Как собрать 21?",
    word: "vinte e um",
    options: ["vinte um", "vinte e um", "vintum", "um e vinte"],
    answer: 1,
    explain: "С 21 до 99 — десятки + e + единицы: vinte e um, trinta e cinco, noventa e nove.",
  },
  {
    id: "hundred",
    prompt: "Как сказать ровно 100?",
    word: "cem",
    options: ["cento", "cem", "cem e zero", "um cento"],
    answer: 1,
    explain: "Ровно 100 — cem. Как только появляется остаток, форма меняется на cento: cento e um.",
  },
  {
    id: "hundred-one",
    prompt: "А 101?",
    word: "cento e um",
    options: ["cem e um", "cento e um", "cem um", "centum"],
    answer: 1,
    explain: "101 = cento e um. Cem живёт только в чистой сотне.",
  },
  {
    id: "sixteen-br",
    prompt: "Как в Бразилии говорят 16?",
    word: "dezesseis",
    options: ["dezasseis", "dezesseis", "dez e seis", "desseis"],
    answer: 1,
    explain: "BR: dezesseis, dezessete, dezenove. PT: dezasseis, dezassete, dezanove — через a.",
  },
  {
    id: "fifteen",
    prompt: "Какое число — quinze?",
    word: "quinze",
    options: ["5", "14", "15", "50"],
    answer: 2,
    explain: "quinze = 15. Пятьдесят — cinquenta, а пять — cinco.",
  },
  {
    id: "fifty",
    prompt: "Как сказать 50?",
    word: "cinquenta",
    options: ["cinco dez", "cinquenta", "cinquanta", "quinhentos"],
    answer: 1,
    explain: "50 — cinquenta. Quinhentos — это 500, легко спутать.",
  },
  {
    id: "two-hundred-fem",
    prompt: "«Двести страниц» (página — ж. р.)?",
    word: "duzentas páginas",
    options: ["duzentos páginas", "duzentas páginas", "dois centos páginas", "duzenta páginas"],
    answer: 1,
    explain: "Сотни согласуются по роду: duzentas páginas, trezentas casas — но duzentos livros.",
  },
  {
    id: "year",
    prompt: "Как читают год 2026?",
    word: "dois mil e vinte e seis",
    options: [
      "vinte vinte e seis",
      "dois mil e vinte e seis",
      "vinte e seis",
      "dois zero dois seis",
    ],
    answer: 1,
    explain: "Годы читают как обычные числа: dois mil e vinte e seis. Английская манера «twenty twenty-six» не работает.",
  },
  {
    id: "thousand-br",
    prompt: "Как звучит mil в Бразилии?",
    word: "mil",
    options: ["миль", "ми́у", "мил", "ми́ли"],
    answer: 1,
    explain: "В BR конечный l вокализируется: mil ≈ ми́у. В Португалии — «миль».",
  },
];

/** Фразы — приветствия, вежливость, выживание. */
const frases: QuizQuestion[] = [
  {
    id: "obrigado",
    prompt: "Женщина говорит «спасибо». Какая форма верна?",
    word: "obrigada",
    options: ["obrigado", "obrigada", "любая", "obrigados"],
    answer: 1,
    explain: "Obrigado/obrigada согласуется с говорящим, а не с собеседником: мужчина — obrigado, женщина — obrigada.",
  },
  {
    id: "bom-dia",
    prompt: "Когда говорят boa tarde?",
    word: "boa tarde",
    options: ["утром", "после полудня и до вечера", "только ночью", "при прощании"],
    answer: 1,
    explain: "Bom dia — до обеда, boa tarde — после полудня, boa noite — вечером и ночью (и при прощании).",
  },
  {
    id: "tudo-bem",
    prompt: "Tudo bem? — это…",
    word: "Tudo bem?",
    options: ["«всё готово?»", "«как дела?»", "«всё дорого?»", "«ты уверен?»"],
    answer: 1,
    explain: "Tudo bem? = «как дела?». Тем же Tudo bem и отвечают — удобно.",
  },
  {
    id: "de-nada",
    prompt: "Вам сказали obrigado. Что ответить?",
    word: "De nada",
    options: ["Por favor", "De nada", "Com licença", "Desculpa"],
    answer: 1,
    explain: "De nada — «не за что». Por favor — «пожалуйста» в значении просьбы, это другое слово.",
  },
  {
    id: "com-licenca",
    prompt: "Нужно пройти сквозь толпу. Что сказать?",
    word: "Com licença",
    options: ["Desculpa", "Com licença", "Pois não", "Tchau"],
    answer: 1,
    explain: "Com licença — «разрешите» до действия. Desculpa — «извини» после того, как уже наступили.",
  },
  {
    id: "quanto-custa",
    prompt: "Как спросить «сколько стоит?»",
    word: "Quanto custa?",
    options: ["Quanto é isso?", "Quanto custa?", "Onde fica?", "Como se diz?"],
    answer: 1,
    explain: "Quanto custa? — «сколько стоит?». Onde fica? — «где находится?», Como se diz? — «как сказать?».",
  },
  {
    id: "conta",
    prompt: "В ресторане нужен счёт. Как попросить?",
    word: "A conta, por favor",
    options: ["O conto, por favor", "A conta, por favor", "A cuenta, por favor", "O preço, por favor"],
    answer: 1,
    explain: "A conta, por favor. Conto — это «рассказ», а cuenta — испанский.",
  },
  {
    id: "nao-entendo",
    prompt: "Как сказать «не понимаю»?",
    word: "Não entendo",
    options: ["Não entendo", "Não escuto", "Não sei falar", "Não gosto"],
    answer: 0,
    explain: "Não entendo. Полезное продолжение: Fala mais devagar, por favor — «говорите медленнее».",
  },
  {
    id: "me-chamo",
    prompt: "«Меня зовут Анна» — как правильно?",
    word: "Eu me chamo Anna",
    options: ["Eu sou chamo Anna", "Eu me chamo Anna", "Meu chamo é Anna", "Eu chamo Anna"],
    answer: 1,
    explain: "Eu me chamo… (буквально «я себя зову»). Второй вариант: O meu nome é Anna.",
  },
  {
    id: "sou-russo",
    prompt: "Женщина говорит «я русская»:",
    word: "Eu sou russa",
    options: ["Eu sou russo", "Eu sou russa", "Eu estou russa", "Eu sou de russa"],
    answer: 1,
    explain: "Национальность согласуется по роду: russo / russa. И это ser, а не estar — постоянный признак.",
  },
  {
    id: "prazer",
    prompt: "Prazer говорят, когда…",
    word: "Prazer",
    options: ["благодарят", "знакомятся", "прощаются", "просят счёт"],
    answer: 1,
    explain: "Prazer — «приятно познакомиться», сокращение от Muito prazer em conhecê-lo.",
  },
  {
    id: "tchau",
    prompt: "Tchau — откуда это слово?",
    word: "Tchau",
    options: ["из английского", "из итальянского ciao", "из испанского", "исконно португальское"],
    answer: 1,
    explain: "Tchau — из итальянского ciao, прижилось в Бразилии. Формальнее: Até logo, Adeus.",
  },
];

/** Грамматика — род, артикли, ser/estar, глаголы -ar. */
const gramatica: QuizQuestion[] = [
  {
    id: "ser-nationality",
    prompt: "«Я русский» — ser или estar?",
    word: "Eu sou russo",
    options: ["Eu estou russo", "Eu sou russo", "оба верны", "Eu é russo"],
    answer: 1,
    explain: "Ser — суть и постоянное: национальность, профессия, происхождение. Estar был бы «я временно русский».",
  },
  {
    id: "estar-state",
    prompt: "«Кофе горячий (сейчас)» — как сказать?",
    word: "O café está quente",
    options: ["O café é quente", "O café está quente", "O café sou quente", "O café tem quente"],
    answer: 1,
    explain: "Estar — временное состояние: está quente сейчас. É quente означало бы «кофе — горячий напиток по природе».",
  },
  {
    id: "article-required",
    prompt: "«Дом большой». Что не так с фразой Casa é grande?",
    word: "A casa é grande",
    options: [
      "ничего, всё верно",
      "нужен артикль: A casa é grande",
      "нужен estar",
      "grande идёт перед casa",
    ],
    answer: 1,
    explain: "Артикль почти всегда обязателен: A casa é grande. Пропуск артикля — типичная ошибка русскоговорящих.",
  },
  {
    id: "o-dia",
    prompt: "Какого рода слово dia?",
    word: "o dia",
    options: ["женского: a dia", "мужского: o dia", "среднего", "зависит от контекста"],
    answer: 1,
    explain: "O dia — мужской род, несмотря на -a. Такие же исключения: o mapa, o problema, o cinema.",
  },
  {
    id: "plural-article",
    prompt: "Множественное число от a casa:",
    word: "as casas",
    options: ["os casas", "as casas", "as casa", "a casas"],
    answer: 1,
    explain: "Артикль и существительное согласуются: a casa → as casas, o livro → os livros.",
  },
  {
    id: "falo",
    prompt: "Eu ___ português. Какая форма falar?",
    word: "Eu falo português",
    options: ["fala", "falo", "falamos", "falar"],
    answer: 1,
    explain: "Для eu окончание -o: eu falo. Você/ele fala, nós falamos, vocês/eles falam.",
  },
  {
    id: "voce-conj",
    prompt: "Você ___ português? Какая форма?",
    word: "Você fala português?",
    options: ["falas", "fala", "falais", "falam"],
    answer: 1,
    explain: "Você спрягается как ele/ela: você fala. Форма falas — это для tu.",
  },
  {
    id: "negation",
    prompt: "Как построить отрицание «я не говорю по-английски»?",
    word: "Eu não falo inglês",
    options: [
      "Eu falo não inglês",
      "Eu não falo inglês",
      "Eu falo inglês não",
      "Não eu falo inglês",
    ],
    answer: 1,
    explain: "Não ставится прямо перед глаголом: Eu não falo inglês.",
  },
  {
    id: "gostar-de",
    prompt: "«Мне нравится кофе» — как правильно?",
    word: "Eu gosto de café",
    options: ["Eu gosto café", "Eu gosto de café", "Eu gosto o café", "Me gosta café"],
    answer: 1,
    explain: "Gostar всегда требует de: gosto de café, gosto de você. Без de фраза ломается.",
  },
  {
    id: "nos-somos",
    prompt: "«Мы из России» — nós ___ da Rússia.",
    word: "Nós somos da Rússia",
    options: ["estamos", "somos", "são", "é"],
    answer: 1,
    explain: "Происхождение — ser: nós somos da Rússia. Estamos na Rússia значило бы «мы находимся в России».",
  },
  {
    id: "tu-voce",
    prompt: "В повседневной речи Бразилии чаще используют…",
    options: ["tu", "você", "vós", "o senhor всегда"],
    answer: 1,
    explain: "В BR você вытеснил tu почти везде. Tu живёт в Португалии, на севере Бразилии и в песнях.",
  },
  {
    id: "question-intonation",
    prompt: "Как задать вопрос Você fala português?",
    word: "Você fala português?",
    options: [
      "поменять порядок слов",
      "добавить вспомогательный глагол",
      "только интонацией, порядок слов тот же",
      "добавить частицу ka",
    ],
    answer: 2,
    explain: "Порядок слов не меняется — вопрос делает интонация (и знак на письме). Никакого do/does, как в английском.",
  },
];

/** Слова — перевод на слух, ложные друзья, род существительных. */
const palavras: QuizQuestion[] = [
  {
    id: "agua",
    prompt: "Что значит água?",
    word: "água",
    options: ["огонь", "вода", "воздух", "земля"],
    answer: 1,
    explain: "Água — вода, женского рода: a água, uma água.",
  },
  {
    id: "pao",
    prompt: "Что значит pão?",
    word: "pão",
    options: ["хлеб", "кастрюля", "боль", "пара"],
    answer: 0,
    explain: "Pão — хлеб (носовое «па̃у̃»). Множественное неочевидно: pães.",
  },
  {
    id: "hoje",
    prompt: "Hoje — это…",
    word: "hoje",
    options: ["вчера", "сегодня", "завтра", "сейчас"],
    answer: 1,
    explain: "Hoje = сегодня, читается «о́жи» (h немое, j = «ж»). Завтра — amanhã, вчера — ontem.",
  },
  {
    id: "ilha",
    prompt: "Что значит ilha?",
    word: "ilha",
    options: ["игла", "остров", "лилия", "деревня"],
    answer: 1,
    explain: "Ilha — остров, «и́лья» через диграф lh.",
  },
  {
    id: "janela",
    prompt: "Janela — это…",
    word: "janela",
    options: ["дверь", "окно", "лестница", "полка"],
    answer: 1,
    explain: "Janela — окно, «жанэ́ла». Дверь — porta.",
  },
  {
    id: "rua",
    prompt: "Что значит rua?",
    word: "rua",
    options: ["река", "улица", "рука", "руль"],
    answer: 1,
    explain: "Rua — улица. Начальное r в BR — горловое «х»: ху́а.",
  },
  {
    id: "false-friend-batom",
    prompt: "Ложный друг: что значит batom?",
    word: "batom",
    options: ["батон хлеба", "помада", "батут", "барабан"],
    answer: 1,
    explain: "Batom — губная помада, не батон. Хлеб — pão, батон — baguete.",
  },
  {
    id: "false-friend-fome",
    prompt: "Estou com fome значит…",
    word: "Estou com fome",
    options: ["мне жарко", "я голоден", "я устал", "мне холодно"],
    answer: 1,
    explain: "Fome — голод, не «фон». «Мне жарко» — estou com calor.",
  },
  {
    id: "coracao",
    prompt: "Что значит coração?",
    word: "coração",
    options: ["корона", "сердце", "коробка", "король"],
    answer: 1,
    explain: "Coração — сердце: ç даёт «с», ão — носовой дифтонг. Кораса̃у̃.",
  },
  {
    id: "gender-mao",
    prompt: "Какого рода слово mão (рука)?",
    word: "a mão",
    options: ["мужского: o mão", "женского: a mão", "среднего", "оба варианта"],
    answer: 1,
    explain: "A mão — женского рода, хотя не кончается на -a. Множественное: as mãos.",
  },
  {
    id: "livro",
    prompt: "Livro — это…",
    word: "livro",
    options: ["печень", "книга", "литр", "лев"],
    answer: 1,
    explain: "Livro — книга, o livro. Печень — fígado, литр — litro.",
  },
  {
    id: "socorro",
    prompt: "Когда кричат Socorro?",
    word: "Socorro",
    options: ["когда зовут официанта", "когда нужна помощь", "когда прощаются", "когда извиняются"],
    answer: 1,
    explain: "Socorro! — «на помощь!». Официанта подзывают: Com licença или Por favor.",
  },
];

export const quizzes: Quiz[] = [
  {
    id: "leitura",
    title: "Правила чтения",
    lead: "Диграфы, носовые, ударение, коварные s, x и r.",
    reviewHref: "/leitura",
    reviewLabel: "Чтение",
    questions: leitura,
  },
  {
    id: "alfabeto",
    title: "Алфавит",
    lead: "Названия букв, ç, диграфы и редкие K, W, Y.",
    reviewHref: "/alfabeto",
    reviewLabel: "Алфавит",
    questions: alfabeto,
  },
  {
    id: "numeros",
    title: "Числа",
    lead: "Род у 1 и 2, сборка десятков, cem против cento.",
    reviewHref: "/numeros",
    reviewLabel: "Числа",
    questions: numeros,
  },
  {
    id: "frases",
    title: "Фразы",
    lead: "Приветствия, вежливость и выживание в кафе.",
    reviewHref: "/frases",
    reviewLabel: "Фразы",
    questions: frases,
  },
  {
    id: "gramatica",
    title: "Грамматика",
    lead: "Артикли, род, ser против estar, глаголы на -ar.",
    reviewHref: "/gramatica",
    reviewLabel: "Грамматика",
    questions: gramatica,
  },
  {
    id: "palavras",
    title: "Слова",
    lead: "Перевод на слух, род существительных, ложные друзья.",
    reviewHref: "/frases",
    reviewLabel: "Фразы",
    questions: palavras,
  },
];

export const QUIZ_IDS = quizzes.map((q) => q.id);

export function quizById(id: string): Quiz | undefined {
  return quizzes.find((q) => q.id === id);
}

/** Kept for the original single-test entry point. */
export const quizQuestions = leitura;
