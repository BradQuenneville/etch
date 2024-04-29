const container = document.querySelector('.container');

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
        const heightWidth = 960 / boxNum
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-box');
        gridBox.style.width = `${heightWidth}px`;
        gridBox.style.height = `${heightWidth}px`;

        //Hover changes to black
        let x = 0
        gridBox.addEventListener("mouseenter", (e) => { 
        if (e.target) { 
            x+=0.1;
        }
        gridBox.style.background = `rgb(0, 0, 0, ${x})`;
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


