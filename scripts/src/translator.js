import { fetchData } from "./utils.js";

export const englishTextToMorseCode = (text, mapping) => {
    const array = Array.from(text.trim().toUpperCase()).filter(item => item !== ' ');
    return getTranslation (array, mapping);
}

export const morseCodeToEnglishText = (code, mapping) => {
    const array = code.trim().split(' ');
    return getTranslation (array, mapping);
}

export const getTranslation = (array, mapping) => {
    const fullTranslation = array.reduce((acc, item) => {
        const itemTranslation = mapping[item];
        
        if (itemTranslation) {
            return acc += itemTranslation + ' ';
        } else {
            return acc += '?' + ' ';
        }
    }, '');
    return fullTranslation.trim();
}

const encodeDecode = (mapping, translationType, toTranslate) => {
    if (translationType == 1) return englishTextToMorseCode(toTranslate, mapping);
    return morseCodeToEnglishText(toTranslate, mapping);  
}

export const getMorseSequences = async (translationType) => {
    const morsecode = 'morsecode';
    const mcReverse = 'morsecode-reverse';
    let json, mapping;

    try {
        if (!window.sessionStorage.getItem(morsecode)) {
            json = await fetchData('./data/morse-code.json');
            window.sessionStorage.setItem(morsecode, JSON.stringify(json));
                
            const jsonReverse = Object.entries(json).reduce((acc, item) => {
                acc[item[1]] = item[0];
                return acc;
            }, {});
            window.sessionStorage.setItem(mcReverse, JSON.stringify(jsonReverse));    
        }
    
        if (translationType == 1) {    //translate English text to Morse Code
            mapping = JSON.parse(window.sessionStorage.getItem(morsecode));
        } else {    //translate Morse Code to English text
            mapping = JSON.parse(window.sessionStorage.getItem(mcReverse));   
        }
    
        return mapping;
    } catch (error) {
        throw error;
    }
}

export const translate = async (translationType, toTranslate) => {
    try {
        let mapping = await getMorseSequences(translationType);
        return encodeDecode(mapping, translationType, toTranslate)
    } catch (error) {
        throw error;
    }
}



