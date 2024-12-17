const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

// Toggle Light/Dark Mode
themeSwitch.addEventListener("change", () => {
  body.classList.toggle("light");
});

// Basic Calculator Logic
let currentOperation = "";
const display = document.getElementById("current-operation");

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "=") {
      try {
        currentOperation = eval(currentOperation).toString();
      } catch {
        currentOperation = "Error";
      }
    } else if (value === "C") {
      currentOperation = "";
    } else if (value === "⌫") {
      currentOperation = currentOperation.slice(0, -1);
    } else {
      currentOperation += value;
    }

    display.innerText = currentOperation;
  });
});