window.addEventListener("DOMContentLoaded", () => {
  currentDisplay.innerText = "";
  previousDisplay.innerText = "";
});
const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

// Toggle Light/Dark Mode
themeSwitch.addEventListener("change", () => {
  body.classList.toggle("light");
});


// Calculator Logic
let currentOperation = ""; // Stores current input
let previousOperation = ""; // Stores the full recent operation (e.g., "6 + 2")

const currentDisplay = document.getElementById("current-operation");
const previousDisplay = document.getElementById("previous-operation");
function updateDisplay() {
  currentDisplay.innerText = currentOperation || "0";

 

  previousDisplay.innerText = previousOperation;
}
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearCalculator();
    } else if (value === "⌫") {
      deleteLastDigit();
    } else {
      appendToOperation(value);
    }
  });
});

// Function to append values (numbers/operators) to currentOperation
function appendToOperation(value) {
  currentOperation += value;
  currentDisplay.innerText = currentOperation;
}

// Function to calculate the result
function calculateResult() {
  if (!currentOperation) return; // Do nothing if input is empty
  try {
    const result = eval(currentOperation);
    previousOperation = currentOperation; // Save the full operation
    currentOperation = result.toString(); // Update currentOperation with result

    // Update displays
    previousDisplay.innerText = previousOperation + " =";
    currentDisplay.innerText = currentOperation;
  } catch {
    currentOperation = "Error";
    currentDisplay.innerText = currentOperation;
  }
}

// Function to clear the calculator
function clearCalculator() {
  currentOperation = "";
  previousOperation = "";
  currentDisplay.innerText = "0";
  previousDisplay.innerText = "";
}

// Function to delete the last digit
function deleteLastDigit() {
  currentOperation = currentOperation.slice(0, -1);
  currentDisplay.innerText = currentOperation || "0";
}