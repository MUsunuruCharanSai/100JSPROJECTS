const button = document.getElementById("roll-button");
const dice = document.getElementById("dice");
const history = document.getElementById("roll-history");

const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

let rolls = [];

function rollDice() {
    const result = Math.floor(Math.random() * 6);
    dice.innerText = faces[result];

    rolls.push(result);

    history.innerHTML = rolls
        .map((roll, index) =>
            `<li>Roll ${index + 1}: <span>${faces[roll]}</span></li>`
        )
        .join("");
}

button.addEventListener("click", () => {
    dice.classList.add("roll");

    setTimeout(() => {
        dice.classList.remove("roll");
        rollDice();
    }, 1000);
});