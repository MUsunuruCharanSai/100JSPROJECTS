let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
rock.addEventListener("click", () => {
  Playgame("rock");
});
paper.addEventListener("click", () => {
  Playgame("paper");
});
scissors.addEventListener("click", () => {
  Playgame("scissors");
});
let userscore = 0;
let systemscore = 0;

let user_score = document.getElementById("users-score");
let system_score = document.getElementById("system-score");

function Playgame(input) {
  let choices = ["rock", "paper", "scissors"];
  let userchoice = input;
  let systemchoice = choices[Math.floor(Math.random() * 3)];
  let result = document.getElementById("result");
  let won = "";
  if (userchoice == systemchoice) {
    won = "Draw";
  } else if (userchoice == "rock" && systemchoice == "paper") {
    won = "System Won";
    systemscore++;
  } else if (userchoice == "paper" && systemchoice == "rock") {
    won = "User Won";
    userscore++;
  } else if (userchoice == "scissors" && systemchoice == "paper") {
    won = "User Won";
    userscore++;
  } else if (userchoice == "paper" && systemchoice == "scissors") {
    won = "System Won";
    systemscore++;
  } else if (userchoice == "rock" && systemchoice == "scissors") {
    won = "User Won";
    userscore++;
  } else if (userchoice == "scissors" && systemchoice == "rock") {
    won = "System Won";
    systemscore++;
  }
  result.innerText = `User Choice: ${userchoice}, System Choice: ${systemchoice}, Result: ${won}`;
  user_score.innerText = `User Score : ${userscore}`;
  system_score.innerText = `System Score : ${systemscore}`;
}

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  userscore = 0;
  systemscore = 0;
  user_score.innerText = `User Score : ${userscore}`;
  system_score.innerText = `System Score : ${systemscore}`;
  result.innerText = "Choose Rock, Paper, or Scissors";
});
