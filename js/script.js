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

    const mouseup = () => { draw = false; };
    item.addEventListener('mouseup', mouseup);

    grid.appendChild(item);
  }

  setDrawColour('#161616');
};

const setDrawColour = (colour) => {
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach((item) => {
    const mousedown = () => { draw = true; item.style.backgroundColor = colour; };
    const mouseenter = () => { if (draw) item.style.backgroundColor = colour; };

    item.addEventListener('mousedown', mousedown);
    item.addEventListener('mouseenter', mouseenter);
  });
};

const clearGrid = () => {
  const grid = document.querySelector('#grid');
  grid.innerHTML = '';
  createGrid(document.querySelector('#size').value);
};

document.addEventListener('DOMContentLoaded', main);