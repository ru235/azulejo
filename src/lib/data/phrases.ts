import type { Example } from "@/lib/data/alphabet";

export type PhraseGroup = {
  id: string;
  title: string;
  items: (Example & { note?: string })[];
};

export const phraseGroups: PhraseGroup[] = [
  {
    id: "hello",
    title: "Приветствия",
    items: [
      { word: "Olá", meaning: "привет", br: { ipa: "/oˈla/", ru: "ола́" } },
      { word: "Oi", meaning: "привет (разг.)", br: { ipa: "/oj/", ru: "ой" } },
      { word: "Bom dia", meaning: "доброе утро / день", br: { ipa: "/bõ ˈdʒiɐ/", ru: "бо̃ джи́а" }, pt: { ipa: "/bõ ˈdiɐ/", ru: "бо̃ ди́а" } },
      { word: "Boa tarde", meaning: "добрый день (после полудня)", br: { ipa: "/ˈboɐ ˈtaʁdʒi/", ru: "бо́а та́хджи" }, pt: { ipa: "/ˈboɐ ˈtaɾdɨ/", ru: "бо́а та́рды" } },
      { word: "Boa noite", meaning: "добрый вечер / спокойной ночи", br: { ipa: "/ˈboɐ ˈnojtʃi/", ru: "бо́а но́йчи" }, pt: { ipa: "/ˈboɐ ˈnojtɨ/", ru: "бо́а но́йты" } },
      { word: "Tudo bem?", meaning: "как дела?", br: { ipa: "/ˈtudu ˈbẽj̃/", ru: "ту́ду бэ̃й̃" } },
      { word: "Tudo bem", meaning: "всё хорошо", br: { ipa: "/ˈtudu ˈbẽj̃/", ru: "ту́ду бэ̃й̃" } },
      { word: "Até logo", meaning: "до скорого", br: { ipa: "/aˈtɛ ˈlɔɡu/", ru: "атэ́ ло́гу" } },
      { word: "Tchau", meaning: "пока", br: { ipa: "/ˈʃaw/", ru: "ша́у" } },
    ],
  },
  {
    id: "courtesy",
    title: "Вежливость",
    items: [
      { word: "Por favor", meaning: "пожалуйста", br: { ipa: "/puʁ faˈvoʁ/", ru: "пух фаво́х" } },
      { word: "Obrigado", meaning: "спасибо (м)", br: { ipa: "/obɾiˈɡadu/", ru: "обрига́ду" }, note: "Говорит мужчина. Женщина — obrigada." },
      { word: "Obrigada", meaning: "спасибо (ж)", br: { ipa: "/obɾiˈɡadɐ/", ru: "обрига́да" } },
      { word: "De nada", meaning: "не за что", br: { ipa: "/dʒi ˈnadɐ/", ru: "джи на́да" }, pt: { ipa: "/dɨ ˈnadɐ/", ru: "ды на́да" } },
      { word: "Desculpa", meaning: "извини", br: { ipa: "/dʒisˈkuwpɐ/", ru: "джиску́упа" }, pt: { ipa: "/dɨʃˈkuɫpɐ/", ru: "дышку́льпа" } },
      { word: "Com licença", meaning: "разрешите / извините (пройти)", br: { ipa: "/kõ liˈsẽsɐ/", ru: "ко̃ лисэ́нса" } },
      { word: "Pois não", meaning: "да, конечно / чем могу помочь", br: { ipa: "/pojz ˈnɐ̃w̃/", ru: "пойз на̃у̃" } },
    ],
  },
  {
    id: "self",
    title: "О себе",
    items: [
      { word: "Eu me chamo…", meaning: "меня зовут…", br: { ipa: "/ew mi ˈʃɐmu/", ru: "эу ми ша́му" } },
      { word: "O meu nome é…", meaning: "моё имя…", br: { ipa: "/u mew ˈnomi ɛ/", ru: "у мэу но́ми э" } },
      { word: "Prazer", meaning: "приятно познакомиться", br: { ipa: "/pɾaˈzeʁ/", ru: "празэ́х" } },
      { word: "Eu sou russo", meaning: "я русский", br: { ipa: "/ew sow ˈhusu/", ru: "эу соу ху́су" } },
      { word: "Eu sou russa", meaning: "я русская", br: { ipa: "/ew sow ˈhusɐ/", ru: "эу соу ху́са" } },
      { word: "Eu não falo português", meaning: "я не говорю по-португальски", br: { ipa: "/ew nɐ̃w̃ ˈfalu poʁtuˈɡes/", ru: "эу на̃у̃ фа́лу португе́с" } },
      { word: "Estou a aprender", meaning: "я учусь (PT)", br: { ipa: "/isˈto a ɐpɾẽˈdeɾ/", ru: "ишто́ а апрендэ́р" }, note: "В Бразилии чаще: Estou aprendendo." },
      { word: "Estou aprendendo", meaning: "я учусь (BR)", br: { ipa: "/isˈtow apɾẽˈdẽdu/", ru: "исто́у апрендэ́нду" } },
    ],
  },
  {
    id: "survival",
    title: "Выживание",
    items: [
      { word: "Sim", meaning: "да", br: { ipa: "/sĩ/", ru: "си̃" } },
      { word: "Não", meaning: "нет", br: { ipa: "/nɐ̃w̃/", ru: "на̃у̃" } },
      { word: "Talvez", meaning: "может быть", br: { ipa: "/tawˈves/", ru: "таувэ́с" } },
      { word: "Não entendo", meaning: "не понимаю", br: { ipa: "/nɐ̃w̃ ẽˈtẽdu/", ru: "на̃у̃ энтэ́нду" } },
      { word: "Fala mais devagar", meaning: "говорите медленнее", br: { ipa: "/ˈfalɐ majz dʒivaˈɡaʁ/", ru: "фа́ла майс дживага́х" } },
      { word: "Como se diz…?", meaning: "как сказать…?", br: { ipa: "/ˈkomu si ˈdʒis/", ru: "ко́му си джис" } },
      { word: "Onde fica…?", meaning: "где находится…?", br: { ipa: "/ˈõdʒi ˈfikɐ/", ru: "о́нджи фи́ка" }, pt: { ipa: "/ˈõdɨ ˈfikɐ/", ru: "о́нды фи́ка" } },
      { word: "Quanto custa?", meaning: "сколько стоит?", br: { ipa: "/ˈkwɐ̃tu ˈkustɐ/", ru: "куа̃нту ку́ста" } },
      { word: "A conta, por favor", meaning: "счёт, пожалуйста", br: { ipa: "/a ˈkõtɐ puʁ faˈvoʁ/", ru: "а ко̃нта пух фаво́х" } },
      { word: "Água", meaning: "вода", br: { ipa: "/ˈaɡwɐ/", ru: "а́гуа" } },
      { word: "Um café, por favor", meaning: "кофе, пожалуйста", br: { ipa: "/ũ kaˈfɛ/", ru: "у̃ кафэ́" } },
      { word: "Socorro", meaning: "на помощь", br: { ipa: "/soˈkohu/", ru: "соко́ху" } },
    ],
  },
  {
    id: "questions",
    title: "Вопросительные слова",
    items: [
      { word: "O quê?", meaning: "что?", br: { ipa: "/u ˈke/", ru: "у кэ" } },
      { word: "Quem?", meaning: "кто?", br: { ipa: "/kẽj̃/", ru: "кэ̃й̃" } },
      { word: "Onde?", meaning: "где?", br: { ipa: "/ˈõdʒi/", ru: "о́нджи" }, pt: { ipa: "/ˈõdɨ/", ru: "о́нды" } },
      { word: "Aonde?", meaning: "куда?", br: { ipa: "/aˈõdʒi/", ru: "ао́нджи" } },
      { word: "Quando?", meaning: "когда?", br: { ipa: "/ˈkwɐ̃du/", ru: "куа̃нду" } },
      { word: "Por quê?", meaning: "почему?", br: { ipa: "/puʁ ˈke/", ru: "пух кэ" } },
      { word: "Como?", meaning: "как?", br: { ipa: "/ˈkomu/", ru: "ко́му" } },
      { word: "Qual?", meaning: "какой / который?", br: { ipa: "/kwaw/", ru: "куа́у" }, pt: { ipa: "/kwal/", ru: "куа́ль" } },
      { word: "Quanto?", meaning: "сколько?", br: { ipa: "/ˈkwɐ̃tu/", ru: "куа̃нту" } },
    ],
  },
];
