const vendorBaskets = [
  document.getElementById('vendor-1'),
  document.getElementById('vendor-2'),
  document.getElementById('vendor-3')
];
const juanBasket = document.getElementById('juan');
const result = document.getElementById('result');
const playButton = document.getElementById('play-animation');

function addOrange(target) {
  const orange = document.createElement('div');
  orange.className = 'orange';
  target.appendChild(orange);
}

function resetLesson() {
  vendorBaskets.forEach((basket) => {
    basket.innerHTML = '';
  });
  juanBasket.innerHTML = '';
  result.textContent = 'Press “Play Animation” to watch Juan collect oranges.';
}

playButton.addEventListener('click', () => {
  resetLesson();

  const steps = [];
  for (let vendor = 0; vendor < 3; vendor += 1) {
    for (let orange = 0; orange < 4; orange += 1) {
      steps.push(() => addOrange(vendorBaskets[vendor]));
      steps.push(() => addOrange(juanBasket));
    }
  }

  let index = 0;
  const timer = setInterval(() => {
    if (index >= steps.length) {
      clearInterval(timer);
      result.textContent = 'Juan collected 12 oranges! 4 oranges × 3 vendors = 12';
      return;
    }

    steps[index]();
    index += 1;
  }, 280);
});
