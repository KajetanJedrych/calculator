const actualResult = document.getElementById('num1');
const actualDisplay = document.getElementById('num2');
let actualValue = "0"; // Store as string to handle decimals
let actualResultValue = 0;
let lastOperator = "";

actualResult.textContent = actualResultValue;
actualDisplay.textContent = actualValue;

function operate(a, b, op) {
    if (op === "+") {
        return a + b;
    } else if (op === "-") {
        return a - b;
    } else if (op === "*") {
        return a * b;
    } else if (op === "/") {
        if (b !== 0) {
            return a / b;
        } else {
            alert("Cannot divide by zero!");
            return a;
        }
    }
    return b; // If no operator is set yet
}

function createEventListener(id, number) {
    document.getElementById(id).addEventListener('click', function () {
        if (actualValue === "0" || actualValue === "0.") {
            actualValue = number.toString();
        } else {
            actualValue += number.toString();
        }
        actualDisplay.textContent = actualValue;
    });
}

function handleOperatorClick(operator) {
    if (lastOperator) {
        actualResultValue = operate(parseFloat(actualResultValue), parseFloat(actualValue), lastOperator);
    } else {
        actualResultValue = parseFloat(actualValue);
    }
    actualValue = "0";
    actualResult.textContent = actualResultValue;
    actualDisplay.textContent = actualValue;
    lastOperator = operator;
}

// Operator buttons event listeners
document.getElementById("plus").addEventListener('click', function () {
    handleOperatorClick("+");
});

document.getElementById("minus").addEventListener('click', function () {
    handleOperatorClick("-");
});

document.getElementById("multiplication").addEventListener('click', function () {
    handleOperatorClick("*");
});

document.getElementById("division").addEventListener('click', function () {
    handleOperatorClick("/");
});

// Dot button event listener
document.getElementById("dot").addEventListener('click', function () {
    if (!actualValue.includes(".")) {
        actualValue += ".";
        actualDisplay.textContent = actualValue;
    }
});

// Equal button event listener
document.getElementById("equal").addEventListener('click', function () {
    if (lastOperator) {
        actualResultValue = operate(parseFloat(actualResultValue), parseFloat(actualValue), lastOperator);
        actualValue = actualResultValue.toString();
        lastOperator = ""; // Reset operator after calculating the result
        actualResult.textContent = "0"; // Clear the result display since the calculation is done
        actualDisplay.textContent = actualValue;
    }
});

// Clear button event listener
document.getElementById("ac").addEventListener('click', function () {
    actualValue = "0";
    actualResultValue = 0;
    lastOperator = "";
    actualResult.textContent = actualResultValue;
    actualDisplay.textContent = actualValue;
});

// Delete button event listener
document.getElementById("del").addEventListener('click', function () {
    if (actualValue.length > 1) {
        actualValue = actualValue.slice(0, -1); // Remove last character
    } else {
        actualValue = "0"; // Reset to 0 if empty
    }
    actualDisplay.textContent = actualValue;
});

// Create event listeners for numbers 0 to 9
createEventListener('zero', 0);
createEventListener('one', 1);
createEventListener('two', 2);
createEventListener('three', 3);
createEventListener('four', 4);
createEventListener('five', 5);
createEventListener('six', 6);
createEventListener('seven', 7);
createEventListener('eight', 8);
createEventListener('nine', 9);
