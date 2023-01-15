import { englishTextToMorseCode, morseCodeToEnglishText } from "./translator.js";

const morseSequences = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----"
}

const reverseMorseCode = Object.entries(morseSequences)
                                .reduce( (acc, entry) => { 
                                            acc[entry[1]] = entry[0]; 
                                            return acc;
                                        }, {});

 const english = 'help';
 const morseCode = '.... . .-.. .--.';

describe('englishTextToMorseCode tests', () => {
    test('Should be defined', () => {
        expect(englishTextToMorseCode(english, morseSequences)).toBeDefined();
    });

    test('Should translate English text to Morse Code', () => {
        expect(englishTextToMorseCode(english, morseSequences)).toBe(morseCode);
    });

    test('Should return a ? within the result for unrecognised text characters', () => {
        expect(englishTextToMorseCode(english + '@', morseSequences)).toBe(morseCode + ' ?');
    });
});

describe('morseCodeToEnglishText tests', () => {
    test('Should be defined', () => {
        expect(morseCodeToEnglishText(morseCode, reverseMorseCode)).toBeDefined();
    });

    test('Should translate Morse Code to English text', () => {
        expect(morseCodeToEnglishText(morseCode, reverseMorseCode)).toBe(Array.from(english.toUpperCase()).join(' '));
    });

    test('Should return a ? within the result for invalid Morse Code', () => {
        expect(morseCodeToEnglishText(morseCode + ' .......', reverseMorseCode)).toBe(Array.from(english.toUpperCase()).join(' ') + ' ?');
    });
});

  