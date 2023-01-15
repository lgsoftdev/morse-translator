import { translate } from "./translator.js";

const placeholderObj = { 1: 'Enter English text', 2: 'Enter Morse Code' }
const selectControl = document.querySelector('select');
const inputControl = document.querySelector('#input');
const outputControl = document.querySelector('#output');
const labelControl = document.querySelector('label');
const resetBtn = document.querySelector('.btn-danger');
const translateBtn = document.querySelector('.btn-success');
const errorMsg = document.querySelector('span');

const getInputPlaceholder = () => {
    const selected = selectControl.value;
    const placeholder = placeholderObj[selected];
    inputControl.setAttribute('placeholder', placeholder);
};

const resetForm = (isInputCtl = false) => {
    if (!isInputCtl) {
        inputControl.value = '';
    }
    inputControl.classList.remove('border-5');
    inputControl.classList.remove('border-danger');
    outputControl.value = '';
    outputControl.classList.remove('fs-3');
    labelControl.style.display = 'none';
    translateBtn.style.display = 'block';
    errorMsg.style.visibility = 'hidden';
    inputControl.focus();
};

const disableControls = (trueFalse) => {
    selectControl.disabled = trueFalse;
    inputControl.disabled = trueFalse;
    resetBtn.disabled = trueFalse;
}

const displayCopyright = () => {
    const control = document.querySelector('footer').querySelectorAll('div')[2];
    control.textContent = control.textContent + new Date().getFullYear();
};

getInputPlaceholder();
displayCopyright();
inputControl.focus();

selectControl.addEventListener('change', () => {
    getInputPlaceholder();
    resetForm();
});

// RESET BUTTON
resetBtn.addEventListener('click', () => {
    resetForm();
});

// TRANSLATE BUTTON
translateBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    outputControl.value = '';
    if (inputControl.value.trim() !== ''){
        disableControls(true);
        outputControl.classList.remove('fs-3');
        translateBtn.style.display = 'none';
        labelControl.style.display = 'block';  
        setTimeout(async () => {
            try {
                const translation = await translate(selectControl.value, inputControl.value);
                outputControl.value = translation;
                outputControl.classList.add('fs-3');
            } catch (error) {
                errorMsg.style.visibility = 'visible';
            }
            labelControl.style.display = 'none';
            translateBtn.style.display = 'block';
            disableControls(false);
          }, 2000);
    } else {
        inputControl.value = '';
        inputControl.classList.add('border-5');
        inputControl.classList.add('border-danger');
        inputControl.focus();
    }
});






