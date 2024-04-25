const resetButton = document.querySelector('button')
const container = document.querySelector('.container')

// Make Grid
const gridSize = 16

const createGrid = (gridSize) => {
    for (i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add(grid-row);

    for (j = 0; j < gridSize; j++) {
    const column = document.createElement('div');
    row.classList.add(grid-box);
    row.appendChild(grid-box);
    }

    container.appendChild(grid-row);
    }
}