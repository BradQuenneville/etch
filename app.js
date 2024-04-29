const container = document.querySelector('.container');

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return {r, g, b}
}

// Make Grid
const gridSize = 16;

const createGrid = (boxNum) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    container.appendChild(wrapper);
    for (i = 0; i < boxNum; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

    for (j = 0; j < boxNum; j++) {
        const {r, g, b} = randomColor();
        const heightWidth = 960 / boxNum
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridBox.style.width = `${heightWidth}px`;
        gridBox.style.height = `${heightWidth}px`;

        //Hover changes to black
        const bgColor = "rgb(" + r + "," + g + "," + b + ")";
        gridBox.addEventListener("mouseenter", () => { 
        gridBox.style.background = bgColor;
    });
    row.appendChild(gridBox);
    }
    wrapper.appendChild(row);
    }
}

createGrid(gridSize);

//RESET
const resetButton = document.querySelector('button');
resetButton.addEventListener('click', () => {
    const wrapper = document.querySelector('.wrapper')
    wrapper.remove()

    let userSize = Number(prompt("What size do you want the new grid? Maximum 100."));
    while (userSize > 100 || isNaN(userSize)==true) {
    userSize = Number(prompt("What size do you want the new grid? Maximum 100."));
    }
    
    createGrid(userSize);
})


