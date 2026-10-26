
let colors = [];
let answer;

function startGame() {
    colors = [];

    for (let i = 0; i < 3; i++) {
        colors.push(
            `rgb(${Math.floor(Math.random() * 256)}, 
                 ${Math.floor(Math.random() * 256)}, 
                 ${Math.floor(Math.random() * 256)})`
        );
    }

    answer = Math.floor(Math.random() * 3);

    document.getElementById("colorCode").textContent = colors[answer];

    let buttons = document.querySelectorAll(".color");

    buttons.forEach((button, index) => {
        button.style.backgroundColor = colors[index];
    });

    document.getElementById("message").textContent = "";
}

function checkColor(index) {
    let message = document.getElementById("message");

    if (index === answer) {
        message.textContent = " Correct! You won!";
        message.style.color = "green";
    } else {
        message.textContent = "Wrong! Try again.";
        message.style.color = "red";
    }
}

startGame();
