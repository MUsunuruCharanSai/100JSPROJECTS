let userScore = 0;
let systemScore = 0;
function checkGuess() {
  let guess = Number(document.getElementById("guess").value);
  let number = Math.floor(Math.random() * 5) + 1;

  if (guess == number) {
    userScore = userScore + 1;
    document.getElementById("result").innerText = "Correct";
  } else {
    systemScore = systemScore + 1;
    document.getElementById("result").innerText = "Wrong. Number was " + number;
  }

  document.getElementById("userScore").innerText = userScore;
  document.getElementById("systemScore").innerText = systemScore;
}
