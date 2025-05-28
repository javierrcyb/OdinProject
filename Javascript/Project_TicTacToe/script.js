let isPlayerOne = true;
const cells = document.getElementsByClassName('cell');

console.log(cells);

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', userMove);
}

function userMove(e) {
    let cellValue = e.target.innerHTML;
    if (!cellValue.length) {
        e.target.innerHTML = isPlayerOne ? 'X' : 'O';
        isPlayerOne = !isPlayerOne;

        checkLine(0, 1, 2);
        checkLine(3, 4, 5);
        checkLine(6, 7, 8);
        checkLine(0, 3, 6);
        checkLine(1, 4, 7);
        checkLine(2, 5, 8);
        checkLine(0, 4, 8);
        checkLine(6, 4, 2);
    }
}

function checkLine(a, b, c) {
    if (
        cells[a].innerHTML.length &&
        cells[a].innerHTML === cells[b].innerHTML &&
        cells[b].innerHTML === cells[c].innerHTML
    ) {
        showWinner(cells[a].innerHTML);
    }
}

function showWinner(player){
    document.querySelector('.results').innerHTML = `Player ${player} wins!`;
}