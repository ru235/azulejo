import type { Example } from "@/lib/data/alphabet";

export type Rule = {
  id: string;
  title: string;
  lead: string;
  points: string[];
  ptNote?: string;
  examples: Example[];
};

export const readingRules: Rule[] = [
  {
    id: "vowels",
    title: "Пять гласных",
    lead: "Португальский пишет a e i o u. Звуков больше, чем букв: e и o бывают открытыми и закрытыми.",
    points: [
      "A — всегда близко к русскому «а».",
      "I — чистое «и», U — чистое «у».",
      "É (открытое) как в «это», ê (закрытое) как в «сеть».",
      "Ó как в «он» открытом, ô как в «дом» закрытом.",
      "В Бразилии безударное e на конце часто звучит как «и», безударное o — как «у»: cidade → сида́джи, bonito → бони́ту.",
    ],
    ptNote:
      "В европейском португальском безударные гласные редуцируются сильнее: e часто становится «ы/ə», а не «и».",
    examples: [
      { word: "café", meaning: "кофе", br: { ipa: "/kaˈfɛ/", ru: "кафэ́" } },
      { word: "você", meaning: "вы", br: { ipa: "/voˈse/", ru: "восе́" } },
      { word: "avó", meaning: "бабушка", br: { ipa: "/aˈvɔ/", ru: "аво́" } },
      { word: "avô", meaning: "дедушка", br: { ipa: "/aˈvo/", ru: "аво́ (закрытое)" } },
    ],
  },
  {
    id: "nasal",
    title: "Носовые гласные",
    lead: "Это главный «новый» звук для русскоговорящих. Воздух идёт и через рот, и через нос. На письме — тильда или m/n в конце слога.",
    points: [
      "ã и õ — носовые. Не добавляйте твёрдое «н» после них.",
      "ão ≈ носовое «а̃у̃»: não, pão, coração. Самое частое окончание.",
      "ãe ≈ «а̃й̃»: mãe (мать).",
      "õe ≈ «о̃й̃»: põe (кладёт), limões (лимоны).",
      "Слог, который заканчивается на m или n, тоже носовой: sim, bom, um, antes. Губы для m в конце не смыкаются.",
      "Не говорите «паон» или «наон» — это выдает акцент. Держите нос, не договаривайте n.",
    ],
    examples: [
      { word: "não", meaning: "нет", br: { ipa: "/nɐ̃w̃/", ru: "на̃у̃" } },
      { word: "pão", meaning: "хлеб", br: { ipa: "/pɐ̃w̃/", ru: "па̃у̃" } },
      { word: "mãe", meaning: "мать", br: { ipa: "/mɐ̃j̃/", ru: "ма̃й̃" } },
      { word: "sim", meaning: "да", br: { ipa: "/sĩ/", ru: "си̃" } },
      { word: "um", meaning: "один", br: { ipa: "/ũ/", ru: "у̃" } },
      { word: "bom", meaning: "хороший", br: { ipa: "/bõ/", ru: "бо̃" } },
    ],
  },
  {
    id: "digraphs",
    title: "Диграфы: ch, lh, nh, rr, ss",
    lead: "Две буквы — один звук. Их нельзя читать по отдельности.",
    points: [
      "ch — всегда «ш»: chave, chuva, chá. Никогда не «ч».",
      "lh — мягкое «ль», как в итальянском figlio: filho, mulher, ilha.",
      "nh — мягкое «нь», как испанское ñ: vinho, ninho, amanhã.",
      "rr — то же, что r в начале слова: горловое «х» в Бразилии (carro, rua).",
      "ss — всегда глухое «с»: isso, passar. Между гласными одно s звучит как «з», поэтому для «с» пишут ss.",
    ],
    examples: [
      { word: "chave", meaning: "ключ", br: { ipa: "/ˈʃavi/", ru: "ша́ви" } },
      { word: "filho", meaning: "сын", br: { ipa: "/ˈfiʎu/", ru: "фи́лью" } },
      { word: "vinho", meaning: "вино", br: { ipa: "/ˈvĩɲu/", ru: "ви̃нью" } },
      { word: "carro", meaning: "машина", br: { ipa: "/ˈkahu/", ru: "ка́ху" }, pt: { ipa: "/ˈkaʁu/", ru: "ка́ру" } },
      { word: "isso", meaning: "это", br: { ipa: "/ˈisu/", ru: "и́су" } },
    ],
  },
  {
    id: "cg",
    title: "C, Ç, G, J и QU/GU",
    lead: "Передние гласные e, i смягчают c и g — как в итальянском и французском.",
    points: [
      "c + a/o/u = «к»: casa, copo, cubo.",
      "c + e/i = «с»: centro, cidade. Никогда «ц».",
      "ç = «с» перед a/o/u: coração, açúcar, começa.",
      "g + a/o/u = «г»: gato, gosto, gula.",
      "g + e/i = «ж»: gente, girar.",
      "j всегда «ж»: já, janela, hoje.",
      "que / qui = «ке/ки», u немое: que, aqui, pequeno.",
      "gue / gui = «ге/ги»: guitarra, guerra. Если u нужно произнести, ставят trema в старой орфографии или просто запоминают (frequente).",
    ],
    examples: [
      { word: "casa", meaning: "дом", br: { ipa: "/ˈkazɐ/", ru: "ка́за" } },
      { word: "centro", meaning: "центр", br: { ipa: "/ˈsẽtɾu/", ru: "сэ́нтру" } },
      { word: "coração", meaning: "сердце", br: { ipa: "/koɾaˈsɐ̃w̃/", ru: "кораса̃у̃" } },
      { word: "gente", meaning: "люди", br: { ipa: "/ˈʒẽtʃi/", ru: "жэ́нчи" }, pt: { ipa: "/ˈʒẽtɨ/", ru: "жэ́нты" } },
      { word: "aqui", meaning: "здесь", br: { ipa: "/aˈki/", ru: "аки́" } },
    ],
  },
  {
    id: "s-z",
    title: "Буквы S и Z",
    lead: "S меняет звук в зависимости от позиции. Это частая ошибка новичков.",
    points: [
      "В начале слова и после согласной — «с»: sol, gosto.",
      "Между гласными — «з»: casa, mesa, Brasil.",
      "Перед звонкой согласной — «з»: mesmo, desde.",
      "ss и ç — всегда «с».",
      "z в начале и в середине — «з»: zero, azul.",
    ],
    ptNote:
      "В Португалии s на конце слога часто звучит как «ш»: os livros → уш ли́вруш. В Бразилии обычно остаётся «с».",
    examples: [
      { word: "sol", meaning: "солнце", br: { ipa: "/sɔw/", ru: "со́у" }, pt: { ipa: "/sɔl/", ru: "соль" } },
      { word: "casa", meaning: "дом", br: { ipa: "/ˈkazɐ/", ru: "ка́за" } },
      { word: "mesa", meaning: "стол", br: { ipa: "/ˈmezɐ/", ru: "мэ́за" } },
      { word: "mesmo", meaning: "тот же", br: { ipa: "/ˈmeʒmu/", ru: "ме́жму" }, pt: { ipa: "/ˈmeʒmu/", ru: "ме́жму" } },
    ],
  },
  {
    id: "x",
    title: "Буква X — четыре звука",
    lead: "X нельзя угадать по одной формуле. Запоминайте частотные слова, остальное придёт с чтением.",
    points: [
      "Чаще всего «ш»: xícara, xadrez, baixo, deixar, peixe.",
      "«кс» в заимствованиях и между гласными в учёных словах: táxi, complexo, tóxico.",
      "«с» после e в начале: experiência, excelente, texto.",
      "«з» в начале после e: exame, exemplo, exercício.",
      "Подсказка: ex- + гласная часто «з»; ex- + согласная часто «с»; иначе пробуйте «ш».",
    ],
    examples: [
      { word: "xícara", meaning: "чашка", br: { ipa: "/ˈʃikaɾɐ/", ru: "ши́кара" } },
      { word: "peixe", meaning: "рыба", br: { ipa: "/ˈpejʃi/", ru: "пе́йши" } },
      { word: "táxi", meaning: "такси", br: { ipa: "/ˈtaksi/", ru: "та́кси" } },
      { word: "exame", meaning: "экзамен", br: { ipa: "/eˈzɐmi/", ru: "эза́ми" } },
      { word: "texto", meaning: "текст", br: { ipa: "/ˈtestu/", ru: "тэ́сту" } },
    ],
  },
  {
    id: "r",
    title: "Буква R",
    lead: "Два разных r. Путать их — одна из самых слышных ошибок.",
    points: [
      "Сильный r (начало слова, после n, и rr): в Бразилии это «х» или мягкое горловое. Rua, rio, honra, carro.",
      "Слабый r (между гласными, после согласной кроме n): короткий удар кончиком языка, как испанское r в pero. Caro, Brasil, prato, obrigado.",
      "На конце слова в Рио и Сан-Паулу часто тоже «х»: falar → фала́х. В Сан-Паулу иногда почти не слышно.",
    ],
    ptNote:
      "В европейском португальском сильный r — увулярный, ближе к французскому r, а не к русскому «х». Конечный r обычно произносится.",
    examples: [
      { word: "rua", meaning: "улица", br: { ipa: "/ˈʁuɐ/", ru: "ху́а" } },
      { word: "rio", meaning: "река", br: { ipa: "/ˈʁiu/", ru: "хи́у" } },
      { word: "caro", meaning: "дорогой", br: { ipa: "/ˈkaɾu/", ru: "ка́ру" } },
      { word: "obrigado", meaning: "спасибо", br: { ipa: "/obɾiˈɡadu/", ru: "обрига́ду" } },
    ],
  },
  {
    id: "dt",
    title: "D и T перед I",
    lead: "Визитная карточка бразильского произношения.",
    points: [
      "В большинстве регионов Бразилии di / de безударное → «джи»: dia, cidade, de.",
      "ti / te безударное → «чи»: tia, noite, gente, leite.",
      "Это не «дь» и не «ть». Ближе к английским j и ch.",
      "Перед a, o, u звук обычный: dado, todo, tu.",
    ],
    ptNote:
      "В Португалии d и t остаются «д» и «т»: dia = ди́а, tia = ти́а, noite = но́йты. Если учите европейский, не палатализируйте.",
    examples: [
      { word: "dia", meaning: "день", br: { ipa: "/ˈdʒiɐ/", ru: "джи́а" }, pt: { ipa: "/ˈdiɐ/", ru: "ди́а" } },
      { word: "tia", meaning: "тётя", br: { ipa: "/ˈtʃiɐ/", ru: "чи́а" }, pt: { ipa: "/ˈtiɐ/", ru: "ти́а" } },
      { word: "noite", meaning: "ночь", br: { ipa: "/ˈnojtʃi/", ru: "но́йчи" }, pt: { ipa: "/ˈnojtɨ/", ru: "но́йты" } },
      { word: "cidade", meaning: "город", br: { ipa: "/siˈdadʒi/", ru: "сида́джи" }, pt: { ipa: "/siˈdadɨ/", ru: "сида́ды" } },
    ],
  },
  {
    id: "l-final",
    title: "L на конце слога",
    lead: "Ещё одно яркое различие Бразилии и Португалии.",
    points: [
      "В Бразилии l в конце слога звучит как «у»: Brasil, legal, mal, papel, azul.",
      "Сравните: mal (плохо) ≈ «ма́у», mau (плохой) тоже «ма́у» — в речи часто совпадают.",
      "В начале слога l обычный: lado, livro, claro.",
    ],
    ptNote: "В Португалии конечный l — твёрдый «ль», ближе к английскому feel, не вокализируется в «у».",
    examples: [
      { word: "Brasil", meaning: "Бразилия", br: { ipa: "/bɾaˈziw/", ru: "брази́у" }, pt: { ipa: "/bɾɐˈzil/", ru: "брази́ль" } },
      { word: "legal", meaning: "классный / законный", br: { ipa: "/leˈɡaw/", ru: "лега́у" }, pt: { ipa: "/lɨˈɡal/", ru: "лыга́ль" } },
      { word: "azul", meaning: "синий", br: { ipa: "/aˈzuw/", ru: "азу́у" }, pt: { ipa: "/ɐˈzul/", ru: "азу́ль" } },
    ],
  },
  {
    id: "h",
    title: "Немое H",
    lead: "H никогда не звучит. Он только буква на письме.",
    points: [
      "hoje = о́жи, hora = о́ра, hotel = отэ́л, honesto = онэ́сту.",
      "ch, lh, nh — это не h, а диграфы (см. выше).",
      "Не придыхайте, как в английском house.",
    ],
    examples: [
      { word: "hoje", meaning: "сегодня", br: { ipa: "/ˈoʒi/", ru: "о́жи" } },
      { word: "hora", meaning: "час", br: { ipa: "/ˈɔɾɐ/", ru: "о́ра" } },
      { word: "homem", meaning: "мужчина", br: { ipa: "/ˈomẽj̃/", ru: "о́мэ̃й̃" } },
    ],
  },
  {
    id: "stress",
    title: "Ударение и акценты",
    lead: "Ударение предсказуемо. Знаки на буквах — не украшение, а инструкция.",
    points: [
      "Если слово кончается на a, e, o, em, am — ударение на предпоследнем слоге: casa, gente, falam.",
      "Если кончается на i, u, l, r, z, x, ã, ão, um — ударение на последнем: aqui, azul, falar, rapaz, coração.",
      "Á é í ó ú (agudo) — ударение здесь; для e/o ещё и открытый звук.",
      "Â ê ô (circunflexo) — ударение и закрытый звук: você, avô.",
      "Ã õ (til) — носовой гласный, часто с ударением: maçã, limões.",
      "À (crase) — слияние предлога a + артикля a: vou à escola (иду в школу).",
      "Если ударение не там, куда указывает правило — на письме обязан стоять знак.",
    ],
    examples: [
      { word: "casa", meaning: "дом", br: { ipa: "/ˈkazɐ/", ru: "ка́за" } },
      { word: "falar", meaning: "говорить", br: { ipa: "/faˈlaʁ/", ru: "фала́х" } },
      { word: "café", meaning: "кофе", br: { ipa: "/kaˈfɛ/", ru: "кафэ́" } },
      { word: "você", meaning: "вы", br: { ipa: "/voˈse/", ru: "восе́" } },
      { word: "maçã", meaning: "яблоко", br: { ipa: "/maˈsɐ̃/", ru: "маса̃" } },
    ],
  },
  {
    id: "diphthongs",
    title: "Дифтонги",
    lead: "Две гласные в одном слоге читаются слитно. Не разбивайте их паузой.",
    points: [
      "ai, ei, oi — «ай, эй, ой»: pai, leite, foi.",
      "au, eu, ou — «ау, эу, оу»: mau, meu, sou.",
      "ão, ãe, õe — носовые дифтонги: não, mãe, põe.",
      "ui, iu: fui, viu.",
      "Сочетание nh + гласная — это не дифтонг, а «нь» + гласная: vinho.",
    ],
    examples: [
      { word: "pai", meaning: "отец", br: { ipa: "/paj/", ru: "пай" } },
      { word: "leite", meaning: "молоко", br: { ipa: "/ˈlejtʃi/", ru: "ле́йчи" }, pt: { ipa: "/ˈlejtɨ/", ru: "ле́йты" } },
      { word: "meu", meaning: "мой", br: { ipa: "/mew/", ru: "мэ́у" } },
      { word: "sou", meaning: "я есть", br: { ipa: "/sow/", ru: "со́у" } },
      { word: "foi", meaning: "был / пошёл", br: { ipa: "/foj/", ru: "фой" } },
    ],
  },
];

export const dialectNotes = {
  br: {
    title: "Бразильский (по умолчанию)",
    items: [
      "Больше носителей, проще найти сериалы и музыку.",
      "te/de перед i звучат как «чи/джи».",
      "Конечный l → «у», безударные e/o → «и/у».",
      "Вежливое обращение — você (на «ты» по смыслу).",
    ],
  },
  pt: {
    title: "Европейский",
    items: [
      "Ближе к Португалии, Африке и официальному языку ЕС.",
      "d и t не смягчаются: dia = ди́а.",
      "Безударные гласные сильно редуцируются, речь кажется «быстрее».",
      "Чаще tu, gerúndio употребляется иначе (estar a + infinitivo).",
    ],
  },
};
