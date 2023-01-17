import { translate } from "./translator.js";

const placeholderObj = { 1: "Enter English text", 2: "Enter Morse Code" };
const selectControl = document.querySelector("select");
const inputControl = document.querySelector("#input");
const outputControl = document.querySelector("#output");
const resetBtn = document.querySelector(".btn-danger");
const errorMsg = document.querySelector("span");

const getInputPlaceholder = () => {
  const selected = selectControl.value;
  const placeholder = placeholderObj[selected];
  inputControl.setAttribute("placeholder", placeholder);
};

const resetForm = (isInputCtl = false) => {
  if (!isInputCtl) {
    inputControl.value = "";
  }
  inputControl.classList.remove("border-5");
  inputControl.classList.remove("border-danger");
  outputControl.value = "";
  errorMsg.style.display = "none";
  inputControl.focus();
};

const disableControls = (trueFalse) => {
  selectControl.disabled = trueFalse;
  inputControl.disabled = trueFalse;
  resetBtn.disabled = trueFalse;
};

const displayCopyright = () => {
  const control = document.querySelector("footer").querySelectorAll("div")[2];
  control.textContent = control.textContent + new Date().getFullYear();
};

getInputPlaceholder();
displayCopyright();
inputControl.focus();

selectControl.addEventListener("change", () => {
  getInputPlaceholder();
  resetForm();
});

inputControl.addEventListener("input", () => {
  const pattern = /[^A-z0-9.?!,\s]/;
  const pattern2 = /[^.\-/\s]/;
  const caretTest = /[\^]/;
  const invalidMsg =
    "Invalid characters are denoted by a question mark in the translation.";
  const toTranslate = inputControl.value;

  outputControl.value = "";
  errorMsg.style.display = "none";

  if (toTranslate.length > 0) {
    if (
      selectControl.value == 1 &&
      (pattern.test(inputControl.value) || caretTest.test(toTranslate))
    ) {
      errorMsg.textContent =
        "Only A-Z, a-z, 0-9, full-stop (.), question mark (?), exclamation mark (!), comma (,), and space characters are allowed. " +
        invalidMsg;
      errorMsg.style.display = "block";
    } else if (selectControl.value == 2 && pattern2.test(toTranslate)) {
      errorMsg.textContent =
        "Only a full-stop (.), hypen (-), forward slash (/) and space characters are allowed. " +
        invalidMsg;
      errorMsg.style.display = "block";
    } else {
      //Default content
      errorMsg.textContent = "An error occurred. Please try again.";
    }

    setTimeout(async () => {
      try {
        const translation = await translate(selectControl.value, toTranslate);
        outputControl.value = translation;
      } catch (error) {
        errorMsg.style.display = "block";
      }
      disableControls(false);
    }, 0); //removed the illusion of waiting
  }
});

// RESET BUTTON
resetBtn.addEventListener("click", () => {
  resetForm();
});
