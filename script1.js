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

function removeDup(arr) {
    let val = [];
    arr.forEach(element => {
        if (!val.includes(element)) {
            val.push(element);
        }
    });
    return val;
}

function displayArray() {
    let arrayDisplay = document.getElementById("arrayDisplay");
    arrayDisplay.innerHTML = "Array values: " + myArray.join(", ");
}

function displaySolutions() {
    let uniqueArray = removeDup(myArray);
    let sumDisplay = document.getElementById("sumDisplay");
    sumDisplay.innerHTML = "An array without duplicates: " + uniqueArray.join(", ");
}
