import { getTranslation, encodeDecode } from "./translator.js";

const morseSequences = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  " ": "/",
};

const reverseMorseCode = Object.entries(morseSequences).reduce((acc, entry) => {
  acc[entry[1]] = entry[0];
  return acc;
}, {});

const english = "learn to code";
const morseCode = ".-.. . .- .-. -. / - --- / -.-. --- -.. .";

describe("getTranslation tests", () => {
  it("Should be defined", () => {
    expect(getTranslation(morseSequences, english, " ", "")).toBeDefined();
  });

  it("Should translate English text to Morse Code", () => {
    expect(getTranslation(morseSequences, english, "", " ")).toBe(morseCode);
  });

  it("Should translate Morse Code to English text", () => {
    expect(getTranslation(reverseMorseCode, morseCode, " ", "")).toBe(
      english.toUpperCase()
    );
  });
});

describe("encodeDecode tests", () => {
  it("Should be defined", () => {
    expect(encodeDecode(morseSequences, 1, english)).toBeDefined();
  });

  it("Should return a string", () => {
    expect(typeof encodeDecode(morseSequences, 1, english)).toBe("string");
  });
});
