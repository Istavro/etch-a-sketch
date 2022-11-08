// DOM variables
const resetBtn = document.querySelector('.reset');
const eraserBtn = document.querySelector('.eraser');
const rainboPukeBtn = document.querySelector('.rainboPuke');
const board = document.querySelector(".board");
const slider = document.getElementById("sizeSlider");
const sliderValue = document.querySelector('.sliderValue');
const applyBtn = document.querySelector('.apply');

//draw the board with the size parsed in.
function drawBoard(size) {
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    for (let i = 0; i < size * size; i++) {
      let square = document.createElement("div");
      board.insertAdjacentElement("beforeend", square);
}
    console.log(squares);
}

drawBoard(16);

// Resets the drawring board by redrawring it.
resetBtn.addEventListener("click", () => drawBoard(currentSize));

slider.oninput = function () {
    sliderValue.textContent = slider.value;
}

applyBtn.addEventListener("click", drawBoard(32));