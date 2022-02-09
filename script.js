function main() {
  const keyboard = document.querySelector('.keyboard');

  for (let i = 0; i < 10; i++) {
    const key = document.createElement('button');
    key.classList.add('key');
    key.setAttribute('id', `${i}`);
    key.textContent = `${i}`;

    keyboard.appendChild(key);
  }
}

main();