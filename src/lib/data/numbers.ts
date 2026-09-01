import type { Example } from "@/lib/data/alphabet";

export const numbers: Example[] = [
  { word: "zero", meaning: "0", br: { ipa: "/ˈzɛɾu/", ru: "зэ́ру" } },
  { word: "um / uma", meaning: "1", br: { ipa: "/ũ/ /ˈumɐ/", ru: "у̃ / у́ма" } },
  { word: "dois / duas", meaning: "2", br: { ipa: "/dojs/ /ˈduɐs/", ru: "дойс / ду́ас" } },
  { word: "três", meaning: "3", br: { ipa: "/tɾes/", ru: "трес" } },
  { word: "quatro", meaning: "4", br: { ipa: "/ˈkwatɾu/", ru: "куа́тру" } },
  { word: "cinco", meaning: "5", br: { ipa: "/ˈsĩku/", ru: "си̃нку" } },
  { word: "seis", meaning: "6", br: { ipa: "/sejs/", ru: "сейс" } },
  { word: "sete", meaning: "7", br: { ipa: "/ˈsɛtʃi/", ru: "сэ́чи" }, pt: { ipa: "/ˈsɛtɨ/", ru: "сэ́ты" } },
  { word: "oito", meaning: "8", br: { ipa: "/ˈojtu/", ru: "о́йту" } },
  { word: "nove", meaning: "9", br: { ipa: "/ˈnɔvi/", ru: "но́ви" } },
  { word: "dez", meaning: "10", br: { ipa: "/dɛs/", ru: "дэс" } },
  { word: "onze", meaning: "11", br: { ipa: "/ˈõzi/", ru: "о̃нзи" } },
  { word: "doze", meaning: "12", br: { ipa: "/ˈdozi/", ru: "до́зи" } },
  { word: "treze", meaning: "13", br: { ipa: "/ˈtɾezi/", ru: "трэ́зи" } },
  { word: "catorze", meaning: "14", br: { ipa: "/kaˈtoɾzi/", ru: "като́рзи" } },
  { word: "quinze", meaning: "15", br: { ipa: "/ˈkĩzi/", ru: "ки̃нзи" } },
  { word: "dezesseis", meaning: "16", br: { ipa: "/dʒizeˈsejs/", ru: "джизесе́йс" }, pt: { ipa: "/dɨzɨˈsɐjʃ/", ru: "дызыса́йш" } },
  { word: "dezessete", meaning: "17", br: { ipa: "/dʒizeˈsɛtʃi/", ru: "джизесэ́чи" }, pt: { ipa: "/dɨzɨˈsɛtɨ/", ru: "дызысэ́ты" } },
  { word: "dezoito", meaning: "18", br: { ipa: "/dʒiˈzojtu/", ru: "джизо́йту" }, pt: { ipa: "/dɨˈzojtu/", ru: "дызо́йту" } },
  { word: "dezenove", meaning: "19", br: { ipa: "/dʒizeˈnɔvi/", ru: "джизено́ви" }, pt: { ipa: "/dɨzɨˈnɔvɨ/", ru: "дызыно́вы" } },
  { word: "vinte", meaning: "20", br: { ipa: "/ˈvĩtʃi/", ru: "ви̃нчи" }, pt: { ipa: "/ˈvĩtɨ/", ru: "ви̃нты" } },
];

export const tens: Example[] = [
  { word: "vinte", meaning: "20", br: { ipa: "/ˈvĩtʃi/", ru: "ви̃нчи" }, pt: { ipa: "/ˈvĩtɨ/", ru: "ви̃нты" } },
  { word: "trinta", meaning: "30", br: { ipa: "/ˈtɾĩtɐ/", ru: "три̃нта" } },
  { word: "quarenta", meaning: "40", br: { ipa: "/kwaˈɾẽtɐ/", ru: "куарэ́нта" } },
  { word: "cinquenta", meaning: "50", br: { ipa: "/sĩˈkwẽtɐ/", ru: "си̃нкэ́нта" } },
  { word: "sessenta", meaning: "60", br: { ipa: "/seˈsẽtɐ/", ru: "сесэ́нта" } },
  { word: "setenta", meaning: "70", br: { ipa: "/seˈtẽtɐ/", ru: "сетэ́нта" } },
  { word: "oitenta", meaning: "80", br: { ipa: "/ojˈtẽtɐ/", ru: "ойтэ́нта" } },
  { word: "noventa", meaning: "90", br: { ipa: "/noˈvẽtɐ/", ru: "новэ́нта" } },
  { word: "cem", meaning: "100", br: { ipa: "/sẽj̃/", ru: "сэ̃й̃" } },
  { word: "cento e um", meaning: "101", br: { ipa: "/ˈsẽtu i ũ/", ru: "сэ́нту и у̃" } },
  { word: "duzentos", meaning: "200", br: { ipa: "/duˈzẽtus/", ru: "дузэ́нтус" } },
  { word: "mil", meaning: "1000", br: { ipa: "/miw/", ru: "ми́у" }, pt: { ipa: "/mil/", ru: "миль" } },
];

export const numberRules = [
  "1 и 2 имеют род: um café, uma água; dois livros, duas casas.",
  "С 21 до 99: десятки + e + единицы. Vinte e um, trinta e cinco, noventa e nove.",
  "16–19 в Бразилии: dezesseis, dezessete, dezoito, dezenove. В Португалии чаще dezasseis, dezassete, dezanove.",
  "100 — cem, но 101+ — cento e …: cento e um, cento e vinte.",
  "Сотни согласуются: duzentos, trezentos; женский род duzentas páginas.",
  "Годы читают как обычные числа: 2026 — dois mil e vinte e seis.",
];
