let draw = false;

const main = () => {
  const clearBtn = document.querySelector('#clear');
  clearBtn.addEventListener('click', clearGrid);

  const sizeInput = document.querySelector('#size');
  sizeInput.addEventListener('change', () => {
    const sliderValue = document.querySelector('#slider-value');
    sliderValue.textContent = sizeInput.value + ' x ' + sizeInput.value;
    createGrid(sizeInput.value);
  });

  createGrid(16);
};

const createGrid = (size) => {
  const grid = document.querySelector('#grid');
  grid.innerHTML = '';
  grid.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`);
  for (let i = 0; i < size * size; i++) {
    const item = document.createElement('div');
    item.classList.add('grid-item');

    const mousedown = () => { draw = true; item.style.backgroundColor = '#161616'; };
    const mouseup = () => { draw = false; };
    const mouseenter = () => {  if (draw) item.style.backgroundColor = '#161616'; };

    item.addEventListener('mousedown', mousedown);
    item.addEventListener('mouseup', mouseup);
    item.addEventListener('mouseenter', mouseenter);

    grid.appendChild(item);
  }
};

const clearGrid = () => {
  const grid = document.querySelector('#grid');
  grid.innerHTML = '';
  createGrid(document.querySelector('#size').value);
};

document.addEventListener('DOMContentLoaded', main);