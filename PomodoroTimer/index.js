let time = 25 * 60;
let interval;

function startTimer() {
  interval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").innerText =
      `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (time === 0) {
      clearInterval(interval);
      alert("Pomodoro completed!");
    }

    time--;
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  time = 25 * 60;
  document.getElementById("timer").innerText = "25:00";
}
