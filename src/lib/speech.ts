export type Dialect = "br" | "pt";

export function dialectLang(dialect: Dialect): "pt-BR" | "pt-PT" {
  return dialect === "pt" ? "pt-PT" : "pt-BR";
}

function pickVoice(lang: string): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  const exact = voices.find((v) => v.lang.replace("_", "-") === lang);
  if (exact) return exact;
  const prefix = lang.slice(0, 2);
  return (
    voices.find((v) => v.lang.replace("_", "-").startsWith(lang.slice(0, 5))) ??
    voices.find((v) => v.lang.toLowerCase().startsWith(prefix))
  );
}

export function speakPortuguese(text: string, dialect: Dialect, slow = false) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const lang = dialectLang(dialect);
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = slow ? 0.68 : 0.88;
  utter.pitch = 1;
  const voice = pickVoice(lang);
  if (voice) utter.voice = voice;
  window.speechSynthesis.speak(utter);
}

export function stopSpeech() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
}

export function preloadVoices() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.getVoices();
  window.speechSynthesis.addEventListener("voiceschanged", () => {
    window.speechSynthesis.getVoices();
  });
}
