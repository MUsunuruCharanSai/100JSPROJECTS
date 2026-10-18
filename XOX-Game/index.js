
const cells = document.querySelectorAll(".cell");
const status = document.getElementById("status");
const reset = document.getElementById("reset");

let currentPlayer = "X";
let gameOver = false;

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.textContent !== "" || gameOver) return;

    cell.textContent = currentPlayer;

    const winner = winningCombinations.some((combo) =>
      combo.every((index) =>
        cells[index].textContent === currentPlayer
      )
    );

    if (winner) {
      status.textContent = `Player ${currentPlayer} wins! 🎉`;
      gameOver = true;
    } else if ([...cells].every(cell => cell.textContent !== "")) {
      status.textContent = "It's a draw!";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      status.textContent = `Player ${currentPlayer}'s turn`;
    }
  });
});

reset.addEventListener("click", () => {
  cells.forEach(cell => cell.textContent = "");
  currentPlayer = "X";
  gameOver = false;
  status.textContent = "Player X's turn";
});
