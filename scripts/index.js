const placeholderObj = { 1: 'Enter English text', 2: 'Enter Morse Code' }
const selectControl = document.querySelector('select');
const inputControl = document.querySelector('#input');
const outputControl = document.querySelector('#output');

const getInputPlaceholder = () => {
    const selected = selectControl.value;
    const placeholder = placeholderObj[selected];
    inputControl.setAttribute('placeholder', placeholder);
}

const displayCopyright = () => {
    const control = document.querySelector('footer').querySelectorAll('div')[2];
    control.innerHTML = control.innerHTML + new Date().getFullYear();
}

getInputPlaceholder();

inputControl.focus();

selectControl.addEventListener('change', () => {
    getInputPlaceholder();
});

inputControl.addEventListener('keyup', () => {
    outputControl.textContent = "Please translate.";
});

displayCopyright();




