function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    alert("Don't divide by zero... dummy");
    return a;
  }
  return a / b;
}

function evaluate(expression) {
  expression = expression.split("");

  const numbers = [];
  let currentNum = "";
  
  const operators =[];
  
  for (let i = 0; i < expression.length; i++) {
    if (!isNaN(expression[i]) || expression[i] == '.') {
      currentNum += expression[i];
      if (i == expression.length - 1) numbers.push(currentNum);
    }
    else {
      operators.push(expression[i]);
      numbers.push(currentNum);
      currentNum = "";
    }
  }

  ['*', '/', '+', '-'].forEach(operation => {
    while (operators.includes(operation)) {
      const index = operators.indexOf(operation);
      const leftSide = numbers[index];
      const rightSide = numbers[index + 1];

      const result = operate(operation, leftSide, rightSide);

      numbers.splice(index, 2, result);
      operators.splice(index, 1);
    }
  });

  populateDisplay("");
  populateDisplay(Math.round(numbers[0] * 100) / 100);
}

function operate(operation, a, b) {
  switch (operation) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

function populateDisplay(str) {
  const display = document.querySelector('.output');
  if (!str) {
    display.textContent = "";
  }
  else {
    operators = ['*', '/', '+', '-'];
    if (operators.includes(str) 
    && operators.some(symbol => display.textContent.split("").includes(symbol))) {
      evaluate(display.textContent);
    }
    display.textContent += str;
  }
}

function createKeyboard() {
  const keyboard = document.querySelector('.keyboard');

  const operators = [
    {name: 'addition', symbol: '+'},
    {name: 'subtraction', symbol: '-'},
    {name: 'multiplication', symbol: '*'},
    {name: 'division', symbol: '/',},
  ];

  for (let i = 2; i >= 0; i--) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 1; j < 4; j++) {
      const currentNum = 3 * i + j;
      const key = document.createElement('button');
      key.classList.add('key');
      key.setAttribute('id', `${currentNum}`);
      key.textContent = `${currentNum}`;
      key.addEventListener('click', () => {
        populateDisplay(key.textContent);
      });

      row.appendChild(key);
    }
    const key = document.createElement('button');
    key.classList.add('key');
    key.classList.add('operator');
    key.setAttribute('id', operators[i+1].name);
    key.textContent = operators[i+1].symbol;
    key.addEventListener('click', () => populateDisplay(key.textContent));
    row.appendChild(key);
    
    keyboard.appendChild(row);
  }

  const bottomRow = document.createElement('div');
  bottomRow.classList.add('row');

  const zero = document.createElement('button');
  zero.classList.add('key');
  zero.setAttribute('id', '0');
  zero.textContent = '0';
  zero.addEventListener('click', () => {
    populateDisplay(zero.textContent);
  });
  bottomRow.appendChild(zero);

  const decimal = document.createElement('button');
  decimal.classList.add('key');
  decimal.setAttribute('id', '.');
  decimal.textContent = '.';
  decimal.addEventListener('click', () => {
    let textContent = document.querySelector('.output').textContent
    let nonNumerical = textContent.replace(/[0-9]/g, '')
    if (!textContent.includes('.') || (nonNumerical[0] == '.' && nonNumerical.length == 2)) {
      populateDisplay(decimal.textContent);
    }
  });
  bottomRow.appendChild(decimal);

  const equals = document.createElement('button');
  equals.classList.add('key');
  equals.classList.add('operator');
  equals.setAttribute('id', 'evaluate');
  equals.textContent = '=';
  equals.addEventListener('click', () => {
    const displayValue = document.querySelector('.output').textContent;
    evaluate(displayValue);
  });
  bottomRow.appendChild(equals);

  const addition = document.createElement('button');
  addition.classList.add('key');
  addition.classList.add('operator');
  addition.setAttribute('id', 'addition');
  addition.textContent = '+';
  addition.addEventListener('click', () => populateDisplay(addition.textContent));
  bottomRow.appendChild(addition);

  keyboard.appendChild(bottomRow);

  const clear = document.createElement('button');
  clear.classList.add('key');
  clear.classList.add('operator');
  clear.setAttribute('id', 'clear');
  clear.textContent = 'AC';
  clear.addEventListener('click', () => populateDisplay(""));
  keyboard.appendChild(clear);
}

function main() {
  createKeyboard();
}

main();
