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
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.addEventListener('mouseover', () => {
      div.setAttribute('style', 'background-color: #161616');
    });
    grid.appendChild(div);
  }
};

const clearGrid = () => {
  const grid = document.querySelector('#grid');
  grid.innerHTML = '';
  createGrid(document.querySelector('#size').value);
};

document.addEventListener('DOMContentLoaded', main);