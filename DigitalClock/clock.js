setInterval(() => {
  let time = document.getElementById("time-screen");
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  time.innerHTML = `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds).padStart(2, 0)}`;
}, 1000);
