# Project: <a href="https://lgsoftdev.github.io/morse-translator/" target="blank">Morse Code Translator</a>

## Outline

The Morse Code Translator is a single web page application that translates English text into Morse Code and Morse Code into English text.

## Features

- The user interface allows the user to either input some English text or some Morse Code
- JS functions working behind the scene allow the user to:
  - translate their English text into Morse Code
  - Morse Code into English text
- Unrecognised characters or codes are represented by a question mark (?).
- A Reset button is available to clear fields.
- Information (eg. 'translating.....') is displayed on the page while text or code is being translated.

###

```js
// A to Z and 0 to 9 in Morse Code
{
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

```

## Some info related to project requirements

- Translation of 0 to 9 characters are included in addition to the A to Z characters.
- Single character to Morse Code translations are stored in a json file which is fetched at the start of user session.
- This project was built in HTML, CSS and JavaScript.
- Test suites were created to test JavaScript functions.
- A public repository on GitHub for the project can be found in https://github.com/lgsoftdev/morse-translator.
- A README.md is available in the repository with a short intro to the project.
