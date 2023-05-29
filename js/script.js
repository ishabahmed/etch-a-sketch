/**
 * Etch-A-Sketch Application
 */
class EtchASketch {
    constructor() {
        this.draw = false;
        this.initialize();
    }

    /**
     * Initializes the application and binds event listeners.
     */
    initialize() {
        // Event listeners for application controls.
        this.bindClearButton();
        this.bindColorSelector();
        this.bindDrawButton();
        this.bindEraserButton();
        this.bindSizeInput();

        // Initialize the grid.
        this.createGrid(16);
    }

    /**
     * Binds the Clear button to clear the grid.
     */
    bindClearButton() {
        const clearBtn = document.querySelector('#clear');
        clearBtn.addEventListener('click', () => this.clearGrid());
    }

    /**
     * Binds the color selector to change the drawing color.
     */
    bindColorSelector() {
        const colourSelector = document.querySelector('#colour-selector');
        colourSelector.value = '#161616';
        colourSelector.addEventListener('input', () => this.setDrawColour(colourSelector.value));
    }

    /**
     * Binds the Draw button to start drawing.
     */
    bindDrawButton() {
        const drawBtn = document.querySelector('#draw');
        drawBtn.addEventListener('click', () => this.setDrawColour(document.querySelector('#colour-selector').value));
    }

    /**
     * Binds the Eraser button to erase.
     */
    bindEraserButton() {
        const eraserBtn = document.querySelector('#eraser');
        eraserBtn.addEventListener('click', () => this.setDrawColour('#c0c0c0'));
    }

    /**
     * Binds the size input to adjust the grid size.
     */
    bindSizeInput() {
        const sizeInput = document.querySelector('#size');
        sizeInput.addEventListener('change', () => {
            const sliderValue = document.querySelector('#slider-value');
            sliderValue.textContent = `${sizeInput.value} x ${sizeInput.value}`;
            this.createGrid(sizeInput.value);
        });
    }

    /**
     * Creates the drawing grid.
     * @param {Number} size - The grid size.
     */
    createGrid(size) {
        const grid = document.querySelector('#grid');
        grid.innerHTML = '';
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const item = document.createElement('div');
            item.classList.add('grid-item');
            item.addEventListener('mouseup', () => this.draw = false);
            grid.appendChild(item);
        }

        this.setDrawColour(document.querySelector('#colour-selector').value);
    }

    /**
     * Sets the drawing color.
     * @param {String} colour - The color to draw with.
     */
    setDrawColour(colour) {
        const gridItems = document.querySelectorAll('.grid-item');

        gridItems.forEach(item => {
            item.addEventListener('mousedown', () => {
                this.draw = true;
                item.style.backgroundColor = colour;
            });

            item.addEventListener('mouseenter', () => {
                if (this.draw) item.style.backgroundColor = colour;
            });
        });
    }

    /**
     * Clears the grid.
     */
    clearGrid() {
        const grid = document.querySelector('#grid');
        grid.innerHTML = '';
        this.createGrid(document.querySelector('#size').value);
    }
}

// Instantiate the Etch-A-Sketch application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => new EtchASketch());