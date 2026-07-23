let timer;
let seconds = 0;
let display_screen = document.getElementById("display-screen");
function Start() {
  clearInterval(timer);
  timer = setInterval(() => {
    seconds++;
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let second = Math.floor(seconds % 60);
    display_screen.innerHTML = `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(second).padStart(2, 0)}`;
  }, 1000);
}
function Stop() {
  clearInterval(timer);
}
function Reset() {
  clearInterval(timer);
  seconds = 0;
  display_screen.innerHTML = "00:00:00";
}
