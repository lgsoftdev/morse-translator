const englishTextToMorseCode = (text, json) => {
    const array = Array.from(text.trim().toUpperCase());
    const translation = array.reduce((acc, item) => {
        if (item === ' ') return acc;

        const code = json[item];
        if (code) {
            return acc += code + ' ';
        } else {
            return acc += '?' + ' ';
        }
    }, '');
    return translation;
}

const morseCodeToEnglishText = (code, json) => {
    const array = code.trim().split(' ');
    const translation = array.reduce((acc, item) => {
    const code = json[item];
        if (code) {
            return acc += code + ' ';
        } else {
            return acc += '?' + ' ';
        }
    }, '');
    return translation;
}

const translate = (type, inputCtl, outputCtl, labelCtl, btnCtl) => {
    const morsecode = 'morsecode';
    const mcReverse = 'morsecode-reverse';

    const encodeDecode = () => {
        setTimeout(() => {
            let json;
            let translation;
            const inputVal = inputCtl.value;
            
            if (type == 1) {    //translate English text to Morse Code
                json = JSON.parse(window.sessionStorage.getItem(morsecode));
                translation = englishTextToMorseCode(inputVal, json);
            } else {    //translate Morse Code to English text
                json = JSON.parse(window.sessionStorage.getItem(mcReverse));   
                translation = morseCodeToEnglishText(inputVal, json);  
            }
            outputCtl.value = translation;
            outputControl.classList.add('fs-3');
            labelCtl.style.display = 'none';
            btnCtl.style.display = 'block';
        }, 2000);
    }

    if (window.sessionStorage.getItem(morsecode)) {
        encodeDecode();
    } else {
        fetch('./data/morse-code.json')
        .then((response) => response.json())
        .then((json) => {
            window.sessionStorage.setItem(morsecode, JSON.stringify(json));
            
            const jsonReverse = Object.entries(json).reduce((acc, item) => {
                acc[item[1]] = item[0];
                return acc;
            }, {});
            window.sessionStorage.setItem(mcReverse, JSON.stringify(jsonReverse));
            encodeDecode();
        });
    } 
};
