const display = document.getElementById("display");

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  if (["+", "-", "*", "/", "%", "^"].includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1) + operator;
  } else {
    display.innerText += operator;
  }
}

function calculateSquare() {
  try {
    display.innerText = Math.pow(eval(display.innerText), 2);
  } catch {
    display.innerText = "Error";
  }
}

function calculateSquareRoot() {
  try {
    display.innerText = Math.sqrt(eval(display.innerText));
  } catch {
    display.innerText = "Error";
  }
}

function calculate() {
  try {
    let expression = display.innerText;
    expression = expression.replace(/\^/g, "**"); // Handle exponentiation
    display.innerText = eval(expression);
  } catch {
    display.innerText = "Error";
  }
}
