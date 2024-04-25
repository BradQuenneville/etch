const resetButton = document.querySelector('button');
const container = document.querySelector('.container');

// Make Grid
const gridSize = 96;

const createGrid = (boxNum) => {
    for (i = 0; i < boxNum; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');

    for (j = 0; j < boxNum; j++) {
    const heightWidth = 960 / gridSize
    const gridBox = document.createElement('div');
    gridBox.classList.add('grid-box');
    gridBox.style.width = `${heightWidth}px`;
    gridBox.style.height = `${heightWidth}px`;
    gridBox.addEventListener("mouseenter", () => {
        gridBox.style.backgroundColor = 'black';
    });
    row.appendChild(gridBox);
    }

    container.appendChild(row);
    }
}
createGrid(gridSize);

//Hover
