function createKeyboard() {
  const keyboard = document.querySelector('.keyboard');

  for (let i = 0; i < 10; i++) {
    const key = document.createElement('button');
    key.classList.add('key');
    key.setAttribute('id', `${i}`);
    key.textContent = `${i}`;

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
  ]

  operators.forEach(operator => {
    const key = document.createElement('button');
    key.classList.add('key');
    key.classList.add('operator');
    key.setAttribute('id', operator.name);
    key.textContent = operator.symbol;

    keyboard.appendChild(key);
  });
}

function main() {
  createKeyboard();
}

main();