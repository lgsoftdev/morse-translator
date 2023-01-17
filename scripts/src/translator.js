import { fetchData } from "./utils.js";

const getTranslation = (mapping, toTranslate, delimiter, join) => {
  const array = toTranslate.toUpperCase().split(delimiter);
  console.log(array);
  const translationArr = array.map((element) => {
    return mapping[element];
  });
  return translationArr.join(join);
};

const encodeDecode = (mapping, translationType, toTranslate) => {
  if (translationType == 1) {
    return getTranslation(mapping, toTranslate, "", " ");
  }
  return getTranslation(mapping, toTranslate, " ", "");
};

export const getMorseSequences = async (translationType) => {
  const morsecode = "morsecode";
  const mcReverse = "morsecode-reverse";
  let json, mapping;

  try {
    if (!window.sessionStorage.getItem(morsecode)) {
      json = await fetchData("./data/morse-code.json");
      window.sessionStorage.setItem(morsecode, JSON.stringify(json));

      const jsonReverse = Object.entries(json).reduce((acc, item) => {
        acc[item[1]] = item[0];
        return acc;
      }, {});
      window.sessionStorage.setItem(mcReverse, JSON.stringify(jsonReverse));
    }

    if (translationType == 1) {
      //translate English text to Morse Code
      mapping = JSON.parse(window.sessionStorage.getItem(morsecode));
    } else {
      //translate Morse Code to English text
      mapping = JSON.parse(window.sessionStorage.getItem(mcReverse));
    }

    return mapping;
  } catch (error) {
    throw error;
  }
};

export const translate = async (translationType, toTranslate) => {
  try {
    let mapping = await getMorseSequences(translationType);
    return encodeDecode(mapping, translationType, toTranslate);
  } catch (error) {
    throw error;
  }
};
