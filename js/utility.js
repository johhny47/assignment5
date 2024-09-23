// make universal function
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id);
    const valueOfInput=inputValue.value;
    return valueOfInput;
}
function getTextFieldValueById(id) {
    const textValue = document.getElementById(id);
    const valueOfText=textValue.innerText;
    return valueOfText;
}
