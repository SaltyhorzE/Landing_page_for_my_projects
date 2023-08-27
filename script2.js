
let myArray = [];


function addToArray() {
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    if (!isNaN(inputValue)) {
        myArray.push(inputValue);
        document.getElementById("inputValue").value = "";
    } else {
        alert("Please enter a valid number.");
    }
}
function sumOfPositiveNumbers() {
    let sum = 0;
    for (let i = 0; i < myArray.length; ++i) {
        if (myArray[i] > 0) {
            sum += myArray[i];
        }
    }
    return sum;
}

// Function to display the array and the sum of positive numbers
function displayArray() {
    let arrayDisplay = document.getElementById("arrayDisplay");
    arrayDisplay.innerHTML = "Array values: " + myArray.join(", ");

    
}
function displaySolutions(){
    let sumDisplay = document.getElementById("sumDisplay");
    sumDisplay.innerHTML = "THE SUM OF POSITIVE NUMBERS IS: " + sumOfPositiveNumbers(); 
}
