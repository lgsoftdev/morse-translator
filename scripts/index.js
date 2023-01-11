const placeholderObj = { 1: 'Enter English text', 2: 'Enter Morse Code' }
const selectControl = document.querySelector('select');
const inputControl = document.querySelector('#input');
const outputControl = document.querySelector('#output');
const labelControl = document.querySelector('label');
const translateBtn = document.querySelector('.btn-success');

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
    inputControl.focus();
};

const displayCopyright = () => {
    const control = document.querySelector('footer').querySelectorAll('div')[2];
    control.innerHTML = control.innerHTML + new Date().getFullYear();
};

getInputPlaceholder();

inputControl.focus();

selectControl.addEventListener('change', () => {
    getInputPlaceholder();
    resetForm();
});

inputControl.addEventListener('keydown', () => {
    resetForm(true);
});

// RESET button
document.querySelector('.btn-danger').addEventListener('click', () => {
    resetForm();
});

// TRANSLATE BUTTON
translateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    outputControl.value = '';
    if (inputControl.value.trim() !== ''){
        outputControl.classList.remove('fs-3');
        labelControl.style.display = 'block';
        translateBtn.style.display = 'none';
        translate(selectControl.value, inputControl, outputControl, labelControl, translateBtn);
    } else {
        inputControl.value = '';
        inputControl.classList.add('border-5');
        inputControl.classList.add('border-danger');
    }
});

displayCopyright();




