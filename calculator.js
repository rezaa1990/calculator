let currentInput = '';

let lastResult = null;

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}



function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}


function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
        lastResult = currentInput;
    } catch (error) {
        currentInput = 'Error';
        document.getElementById('display').value = currentInput;
    }
}


function calculatePercentage() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    document.getElementById('display').value = currentInput;
}


function calculateSquare() {
    currentInput = (parseFloat(currentInput) * parseFloat(currentInput)).toString();
    document.getElementById('display').value = currentInput;
}


function calculateSquareRoot() {
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    document.getElementById('display').value = currentInput;
}


function removeLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
}


