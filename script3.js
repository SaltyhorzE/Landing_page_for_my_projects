const inputForm = document.getElementById("inputform");
const userInputElement = document.getElementById("userInput");
const displayValue = document.getElementById("displayValue");

function extractFirstLetters(str) {
    let result = "";
    let v = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            v = true;
        } else if (str[i] != ' ' && v == true) {
            result += str[i];
            v = false;
        }
    }
    return result;
}

inputForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let str = userInputElement.value;
    let firstLetterResult = extractFirstLetters(str);
    displayValue.innerHTML = "The first letters of a string is : " + firstLetterResult;
});
