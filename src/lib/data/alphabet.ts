export type Pron = { ipa: string; ru: string };

export type Example = {
  word: string;
  meaning: string;
  br: Pron;
  pt?: Pron;
};

export type Letter = {
  char: string;
  name: string;
  nameIpa: string;
  rare?: boolean;
  note: string;
  examples: Example[];
};

export const alphabet: Letter[] = [
  {
    char: "A",
    name: "á",
    nameIpa: "/a/",
    note: "Как русское «а». В конце слова без ударения чуть короче.",
    examples: [
      { word: "água", meaning: "вода", br: { ipa: "/ˈaɡwɐ/", ru: "а́гуа" } },
      { word: "amigo", meaning: "друг", br: { ipa: "/aˈmiɡu/", ru: "ами́гу" } },
    ],
  },
  {
    char: "B",
    name: "bê",
    nameIpa: "/be/",
    note: "Как русское «б». Всегда твёрдый, без оглушения на конце.",
    examples: [
      { word: "bom", meaning: "хороший", br: { ipa: "/bõ/", ru: "бо̃" } },
      { word: "beber", meaning: "пить", br: { ipa: "/beˈbeʁ/", ru: "бебэ́х" } },
    ],
  },
  {
    char: "C",
    name: "cê",
    nameIpa: "/se/",
    note: "Перед a, o, u — «к». Перед e, i — «с». Никогда не «ц».",
    examples: [
      { word: "casa", meaning: "дом", br: { ipa: "/ˈkazɐ/", ru: "ка́за" } },
      { word: "cidade", meaning: "город", br: { ipa: "/siˈdadʒi/", ru: "сида́джи" }, pt: { ipa: "/siˈdadɨ/", ru: "сида́ды" } },
    ],
  },
  {
    char: "D",
    name: "dê",
    nameIpa: "/de/",
    note: "В бразильском перед i (и безударным e) часто звучит как «дж»: dia → джи́а.",
    examples: [
      { word: "dia", meaning: "день", br: { ipa: "/ˈdʒiɐ/", ru: "джи́а" }, pt: { ipa: "/ˈdiɐ/", ru: "ди́а" } },
      { word: "dado", meaning: "данный / кубик", br: { ipa: "/ˈdadu/", ru: "да́ду" } },
    ],
  },
  {
    char: "E",
    name: "é",
    nameIpa: "/ɛ/",
    note: "Может быть открытым /ɛ/ (é) или закрытым /e/ (ê). В конце слова в Бразилии часто звучит как «и».",
    examples: [
      { word: "ele", meaning: "он", br: { ipa: "/ˈeli/", ru: "э́ли" }, pt: { ipa: "/ˈelɨ/", ru: "э́лы" } },
      { word: "café", meaning: "кофе", br: { ipa: "/kaˈfɛ/", ru: "кафэ́" } },
    ],
  },
  {
    char: "F",
    name: "efe",
    nameIpa: "/ˈɛfi/",
    note: "Как русское «ф».",
    examples: [
      { word: "falar", meaning: "говорить", br: { ipa: "/faˈlaʁ/", ru: "фала́х" } },
      { word: "fácil", meaning: "лёгкий", br: { ipa: "/ˈfasil/", ru: "фа́сиу" }, pt: { ipa: "/ˈfasɨl/", ru: "фа́силь" } },
    ],
  },
  {
    char: "G",
    name: "gê",
    nameIpa: "/ʒe/",
    note: "Перед a, o, u — «г». Перед e, i — «ж» (gente). Как в итальянском.",
    examples: [
      { word: "gato", meaning: "кот", br: { ipa: "/ˈɡatu/", ru: "га́ту" } },
      { word: "gente", meaning: "люди", br: { ipa: "/ˈʒẽtʃi/", ru: "жэ́нчи" }, pt: { ipa: "/ˈʒẽtɨ/", ru: "жэ́нты" } },
    ],
  },
  {
    char: "H",
    name: "agá",
    nameIpa: "/aˈɡa/",
    note: "Всегда немое. hotel читается «отэ́л», hoje — «о́жи».",
    examples: [
      { word: "hoje", meaning: "сегодня", br: { ipa: "/ˈoʒi/", ru: "о́жи" } },
      { word: "hotel", meaning: "отель", br: { ipa: "/oˈtɛw/", ru: "отэ́у" }, pt: { ipa: "/ɔˈtɛl/", ru: "отэ́ль" } },
    ],
  },
  {
    char: "I",
    name: "i",
    nameIpa: "/i/",
    note: "Как русское «и». Короткое и чистое, без йотации.",
    examples: [
      { word: "ilha", meaning: "остров", br: { ipa: "/ˈiʎɐ/", ru: "и́лья" } },
      { word: "sim", meaning: "да", br: { ipa: "/sĩ/", ru: "си̃" } },
    ],
  },
  {
    char: "J",
    name: "jota",
    nameIpa: "/ˈʒɔtɐ/",
    note: "Всегда «ж»: janela, hoje. Никогда не «й» и не «дж».",
    examples: [
      { word: "janela", meaning: "окно", br: { ipa: "/ʒaˈnɛlɐ/", ru: "жанэ́ла" } },
      { word: "já", meaning: "уже", br: { ipa: "/ʒa/", ru: "жа" } },
    ],
  },
  {
    char: "K",
    name: "cá",
    nameIpa: "/ka/",
    rare: true,
    note: "Только в заимствованиях: kilo, karate, Kafka.",
    examples: [
      { word: "kilo", meaning: "килограмм", br: { ipa: "/ˈkilu/", ru: "ки́лу" } },
    ],
  },
  {
    char: "L",
    name: "ele",
    nameIpa: "/ˈɛli/",
    note: "В начале — «л». В конце слога в Бразилии часто «у»: Brasil → Брази́у.",
    examples: [
      { word: "livro", meaning: "книга", br: { ipa: "/ˈlivɾu/", ru: "ли́вру" } },
      { word: "Brasil", meaning: "Бразилия", br: { ipa: "/bɾaˈziw/", ru: "брази́у" }, pt: { ipa: "/bɾɐˈzil/", ru: "брази́ль" } },
    ],
  },
  {
    char: "M",
    name: "eme",
    nameIpa: "/ˈɛmi/",
    note: "В начале слога — «м». В конце слога не произносится как губное: носовит гласную (sim, bom).",
    examples: [
      { word: "mesa", meaning: "стол", br: { ipa: "/ˈmezɐ/", ru: "мэ́за" } },
      { word: "bom", meaning: "хороший", br: { ipa: "/bõ/", ru: "бо̃" } },
    ],
  },
  {
    char: "N",
    name: "ene",
    nameIpa: "/ˈɛni/",
    note: "Как «н». В конце слога тоже носовит гласную: não, antes.",
    examples: [
      { word: "não", meaning: "нет", br: { ipa: "/nɐ̃w̃/", ru: "на̃у̃" } },
      { word: "noite", meaning: "ночь", br: { ipa: "/ˈnojtʃi/", ru: "но́йчи" }, pt: { ipa: "/ˈnojtɨ/", ru: "но́йты" } },
    ],
  },
  {
    char: "O",
    name: "ó",
    nameIpa: "/ɔ/",
    note: "Открытый /ɔ/ (ó) или закрытый /o/ (ô). Безударный на конце в Бразилии — «у»: bonito → бони́ту.",
    examples: [
      { word: "ovo", meaning: "яйцо", br: { ipa: "/ˈovu/", ru: "о́ву" } },
      { word: "porto", meaning: "порт", br: { ipa: "/ˈpoʁtu/", ru: "по́хту" }, pt: { ipa: "/ˈpoɾtu/", ru: "по́рту" } },
    ],
  },
  {
    char: "P",
    name: "pê",
    nameIpa: "/pe/",
    note: "Как русское «п», без придыхания.",
    examples: [
      { word: "pão", meaning: "хлеб", br: { ipa: "/pɐ̃w̃/", ru: "па̃у̃" } },
      { word: "pai", meaning: "отец", br: { ipa: "/paj/", ru: "пай" } },
    ],
  },
  {
    char: "Q",
    name: "quê",
    nameIpa: "/ke/",
    note: "Всегда в сочетании qu. Перед e, i буква u немая: que → «ки», aqui → «аки́».",
    examples: [
      { word: "que", meaning: "что / который", br: { ipa: "/ki/", ru: "ки" } },
      { word: "quatro", meaning: "четыре", br: { ipa: "/ˈkwatɾu/", ru: "куа́тру" } },
    ],
  },
  {
    char: "R",
    name: "erre",
    nameIpa: "/ˈɛhi/",
    note: "В начале слова и после n — горловое «х» (BR) или картавое. Между гласными — короткий удар языка, как испанское r.",
    examples: [
      { word: "rua", meaning: "улица", br: { ipa: "/ˈʁuɐ/", ru: "ху́а" }, pt: { ipa: "/ˈʁuɐ/", ru: "ру́а" } },
      { word: "caro", meaning: "дорогой", br: { ipa: "/ˈkaɾu/", ru: "ка́ру" } },
    ],
  },
  {
    char: "S",
    name: "esse",
    nameIpa: "/ˈɛsi/",
    note: "В начале — «с». Между гласными — «з» (casa). Двойное ss — всегда «с».",
    examples: [
      { word: "sol", meaning: "солнце", br: { ipa: "/sɔw/", ru: "со́у" }, pt: { ipa: "/sɔl/", ru: "соль" } },
      { word: "casa", meaning: "дом", br: { ipa: "/ˈkazɐ/", ru: "ка́за" } },
    ],
  },
  {
    char: "T",
    name: "tê",
    nameIpa: "/te/",
    note: "В бразильском перед i (и безударным e) часто «ч»: tia → чи́а, noite → но́йчи.",
    examples: [
      { word: "tia", meaning: "тётя", br: { ipa: "/ˈtʃiɐ/", ru: "чи́а" }, pt: { ipa: "/ˈtiɐ/", ru: "ти́а" } },
      { word: "ter", meaning: "иметь", br: { ipa: "/teʁ/", ru: "тэ́х" } },
    ],
  },
  {
    char: "U",
    name: "u",
    nameIpa: "/u/",
    note: "Как русское «у». В que/qui и gue/gui обычно не читается.",
    examples: [
      { word: "uva", meaning: "виноград", br: { ipa: "/ˈuvɐ/", ru: "у́ва" } },
      { word: "azul", meaning: "синий", br: { ipa: "/aˈzuw/", ru: "азу́у" }, pt: { ipa: "/ɐˈzul/", ru: "азу́ль" } },
    ],
  },
  {
    char: "V",
    name: "vê",
    nameIpa: "/ve/",
    note: "Как русское «в». Всегда звонкий, не путать с b.",
    examples: [
      { word: "você", meaning: "вы / ты", br: { ipa: "/voˈse/", ru: "восе́" } },
      { word: "vinho", meaning: "вино", br: { ipa: "/ˈvĩɲu/", ru: "ви̃нью" } },
    ],
  },
  {
    char: "W",
    name: "dáblio",
    nameIpa: "/ˈdablju/",
    rare: true,
    note: "Только в заимствованиях. Читается как «в» или «у» в зависимости от слова.",
    examples: [
      { word: "web", meaning: "веб", br: { ipa: "/wɛbi/", ru: "уэ́би" } },
    ],
  },
  {
    char: "X",
    name: "xis",
    nameIpa: "/ʃis/",
    note: "Самая капризная буква: чаще «ш», иногда «кс», «с» или «з». См. правила чтения.",
    examples: [
      { word: "xícara", meaning: "чашка", br: { ipa: "/ˈʃikaɾɐ/", ru: "ши́кара" } },
      { word: "táxi", meaning: "такси", br: { ipa: "/ˈtaksi/", ru: "та́кси" } },
    ],
  },
  {
    char: "Y",
    name: "ípsilon",
    nameIpa: "/ˈipsilõ/",
    rare: true,
    note: "Только в заимствованиях. Обычно как «и» или «й».",
    examples: [
      { word: "yoga", meaning: "йога", br: { ipa: "/ˈjɔɡɐ/", ru: "йо́га" } },
    ],
  },
  {
    char: "Z",
    name: "zê",
    nameIpa: "/ze/",
    note: "Как русское «з». На конце слова в Бразилии часто «с».",
    examples: [
      { word: "zero", meaning: "ноль", br: { ipa: "/ˈzɛɾu/", ru: "зэ́ру" } },
      { word: "azul", meaning: "синий", br: { ipa: "/aˈzuw/", ru: "азу́у" }, pt: { ipa: "/ɐˈzul/", ru: "азу́ль" } },
    ],
  },
  {
    char: "Ç",
    name: "cê cedilha",
    nameIpa: "/se seˈdiʎɐ/",
    note: "Всегда «с». Пишется только перед a, o, u: coração, açúcar, começa.",
    examples: [
      { word: "coração", meaning: "сердце", br: { ipa: "/koɾaˈsɐ̃w̃/", ru: "кораса̃у̃" } },
      { word: "açúcar", meaning: "сахар", br: { ipa: "/aˈsukaʁ/", ru: "асу́ках" } },
    ],
  },
];
