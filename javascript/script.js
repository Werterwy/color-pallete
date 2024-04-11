// Генерация случайного цвета в формате RGB
function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Создание палитры выбора цветов
function createColorPalette(numColors) {
  const colorPicker = document.getElementById('color-picker');
  colorPicker.innerHTML = '';
  for (let i = 0; i < numColors; i++) {
    const colorDiv = document.createElement('div');
    const color = randomColor();
    colorDiv.style.backgroundColor = color;
    colorDiv.classList.add('color');
    colorDiv.setAttribute('data-color', color);
    colorDiv.addEventListener('click', () => selectColor(color));
    colorPicker.appendChild(colorDiv);
  }
}

// Функция выбора цвета
function selectColor(color) {
  const selectedColors = document.getElementById('selected-colors');
  const selectedColorDiv = document.createElement('div');
  selectedColorDiv.style.backgroundColor = color;
  selectedColorDiv.classList.add('selected-color');
  selectedColorDiv.textContent = color;
  selectedColors.appendChild(selectedColorDiv);
}

// Создание начальной палитры
createColorPalette(6);
