let displayValue = "";

function add(a, b) {
  return parseInt(a) + parseInt(b);
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
  const expression = displayValue.split("");

  const numbers = [];
  let currentNum = "";
  
  const operators =[];
  
  for (let i = 0; i < expression.length; i++) {
    if (!isNaN(expression[i])) {
      currentNum += expression[i];
      if (i == expression.length - 1) numbers.push(currentNum);
    }
    else {
      operators.push(expression[i]);
      numbers.push(currentNum);
      currentNum = "";
    }
  }

  console.log(numbers);

  // change to 'array.reduce()' 
  ['*', '/', '+', '-'].forEach(operation => {
    while (operators.includes(operation)) {
      const index = operators.indexOf(operation);
      const leftSide = numbers[index];
      const rightSide = numbers[index + 1];

      // console.log(numbers);
      // console.log(operators);
      // console.log(leftSide);
      // console.log(rightSide);

      const result = operate(operation, leftSide, rightSide);

      numbers.splice(index, 2, result);
      operators.splice(index, 1);
    }
  });

  populateDisplay("");
  populateDisplay(numbers[0]);
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