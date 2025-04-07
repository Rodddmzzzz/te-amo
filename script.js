const buttonNo = document.querySelector('#no');
const buttonYes = document.querySelector('#yes');

let fontSize = 2;

let messages = [
  '¿Estás segura?',
  'Pero soy tu bebé :(',
  'Dale, pendeja de mrd',
  'MORENA DALE',
  'Yo sabía que eras mala',
  'Eres grande y mala :('
];

buttonNo.addEventListener('click', () => {
  fontSize += 0.5;
  buttonYes.style.fontSize = `${fontSize}rem`;

  const indexRandom = Math.floor(Math.random() * messages.length);
  buttonNo.textContent = messages[indexRandom];
});

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex';
});