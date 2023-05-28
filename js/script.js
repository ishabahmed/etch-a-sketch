const grid = document.querySelector('#grid');
for (let i = 0; i < 16; i++) {
  const div = document.createElement('div');
  div.classList.add('grid-item');
  div.addEventListener('mouseover', () => {
    div.setAttribute('style', 'background-color: #161616');
  });
  grid.appendChild(div);
}

