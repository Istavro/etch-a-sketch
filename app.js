let board = document.querySelector(".board");

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

// Function to change the size of the board.
function changeSize(size){
    if(size >= 1 && size <= 500){}
}