let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");

let snake = [
    { x: 200, y: 200 }
];

let food = {
    x: 100,
    y: 100
};

let direction = "RIGHT";
let score = 0;

document.addEventListener("keydown", function(event) {

    if (event.key == "ArrowUp" && direction != "DOWN")
        direction = "UP";

    if (event.key == "ArrowDown" && direction != "UP")
        direction = "DOWN";

    if (event.key == "ArrowLeft" && direction != "RIGHT")
        direction = "LEFT";

    if (event.key == "ArrowRight" && direction != "LEFT")
        direction = "RIGHT";
});

function game() {

    ctx.clearRect(0, 0, 400, 400);

    // Draw snake
    for (let part of snake) {
        ctx.fillStyle = "lime";
        ctx.fillRect(part.x, part.y, 20, 20);
    }

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 20, 20);

    // Create new head
    let head = {
        x: snake[0].x,
        y: snake[0].y
    };

    if (direction == "UP")
        head.y -= 20;

    if (direction == "DOWN")
        head.y += 20;

    if (direction == "LEFT")
        head.x -= 20;

    if (direction == "RIGHT")
        head.x += 20;

    // Wall collision
    if (
        head.x < 0 ||
        head.x >= 400 ||
        head.y < 0 ||
        head.y >= 400
    ) {
        clearInterval(gameLoop);
        alert("Game Over!");
        return;
    }

    snake.unshift(head);

    // Food collision
    if (head.x == food.x && head.y == food.y) {

        score++;

        document.getElementById("score").innerText = score;

        food.x = Math.floor(Math.random() * 20) * 20;
        food.y = Math.floor(Math.random() * 20) * 20;

    } else {
        snake.pop();
    }
}

let gameLoop = setInterval(game, 100);