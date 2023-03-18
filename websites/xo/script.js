const cells = document.querySelectorAll('.cell');
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const modeRadio = document.querySelectorAll('input[name="mode"]');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick);
}

for (let i = 0; i < modeRadio.length; i++) {
    modeRadio[i].addEventListener('change', handleModeChange);
}

let xIsNext = true;
let gameMode = 'player';

function handleClick(e) {
    const cell = e.target;
    if (cell.textContent === '') {
        cell.textContent = xIsNext ? 'X' : 'O';
        xIsNext = !xIsNext;
        checkForWin();
        if (gameMode === 'computer' && !xIsNext) {
            setTimeout(() => computerMove(), 1000);
        }
    }
}

function handleModeChange(e) {
    gameMode = e.target.value;
    resetGame();
}

function checkForWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (
            cells[a].textContent === cells[b].textContent &&
            cells[b].textContent === cells[c].textContent &&
            cells[a].textContent !== ''
        ) {
            alert(`Player ${cells[a].textContent} wins!`);
            resetGame();
            return;
        }
    }
}

function computerMove() {
    // Check for potential winning combinations for the player
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (
            cells[a].textContent === 'X' &&
            cells[b].textContent === 'X' &&
            cells[c].textContent === ''
        ) {
            cells[c].textContent = 'O';
            xIsNext = true;
            checkForWin();
            return;
        } else if (
            cells[a].textContent === 'X' &&
            cells[b].textContent === '' &&
            cells[c].textContent === 'X'
        ) {
            cells[b].textContent = 'O';
            xIsNext = true;
            checkForWin();
            return;
        } else if (
            cells[a].textContent === '' &&
            cells[b].textContent === 'X' &&
            cells[c].textContent === 'X'
        ) {
            cells[a].textContent = 'O';
            xIsNext = true;
            checkForWin();
            return;
        }
    }

    // Select a random empty cell
    let emptyCells = [];
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === '') {
            emptyCells.push(cells[i]);
        }
    }
    if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        randomCell.textContent = 'O';
        xIsNext = true;
        checkForWin();
    }
}

function handleClick(e) {
    const cell = e.target;
    if (cell.textContent === '') {
        cell.textContent = xIsNext ? 'X' : 'O';
        xIsNext ? cell.classList.add('x') : cell.classList.add('o');
        xIsNext = !xIsNext;
        checkForWin();
        if (gameMode === 'computer' && !xIsNext) {
            setTimeout(() => computerMove(), 1000);
        }
    }
}

// ====================================================================================================================

