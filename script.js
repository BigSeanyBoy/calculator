let displayValue = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function evaluate() {
  return 1;
}

function operate(operation, a, b) {
  switch (operation) {
    case 'addition':
      return add(a, b);
    case 'subtraction':
      return subtract(a, b);
    case 'multiplication':
      return multiply(a, b);
    case 'division':
      return divide(a, b);
  }
}

function populateDisplay(str) {
  const display = document.querySelector('.output');
  if (!str) {
    display.textContent = "";
    displayValue = "";
  }
  else {
    display.textContent += str;
    displayValue += str;
  }
}

function createKeyboard() {
  const keyboard = document.querySelector('.keyboard');

  for (let i = 0; i < 10; i++) {
    const key = document.createElement('button');
    key.classList.add('key');
    key.setAttribute('id', `${i}`);
    key.textContent = `${i}`;
    key.addEventListener('click', () => {
      populateDisplay(key.textContent);
    });

    keyboard.appendChild(key);
  }

  const operators = [
    {
      name: 'addition',
      symbol: '+',
    },
    {
      name: 'subtraction',
      symbol: '-',
    },
    {
      name: 'multiplication',
      symbol: '*',
    },
    {
      name: 'division',
      symbol: '/',
    },
    {
      name: 'evaluate',
      symbol: '=',
    },
    {
      name: 'clear',
      symbol: 'AC'
    },
  ];

  operators.forEach(operator => {
    const key = document.createElement('button');
    key.classList.add('key');
    key.classList.add('operator');
    key.setAttribute('id', operator.name);
    key.textContent = operator.symbol;
    if (operator.symbol == '=') {
      key.addEventListener('click', () => evaluate());
    }
    else if (operator.symbol == 'AC') {
      key.addEventListener('click', () => populateDisplay(""));
    }
    else {
      key.addEventListener('click', () => populateDisplay(key.textContent));
    }
    keyboard.appendChild(key);
  });
}

function main() {
  createKeyboard();
}

main();